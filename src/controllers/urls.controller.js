import db from '../database/database.connection.js';
import { nanoid } from 'nanoid';

export async function createUrl(req, res) {
    const {url} = req.body;
    try {
        const userId = (await db.query(`SELECT * FROM users WHERE email=$1`,[res.locals.user.email])).rows[0].id;
        const shortUrl = nanoid(6);    
        await db.query(`INSERT INTO short_urls (shorturl,url,owner_id,"visitCount") VALUES( $1,$2,$3,$4 )`,[shortUrl,url,userId,0]);
        const id = (await db.query(`SELECT * FROM short_urls WHERE shorturl = $1`,[shortUrl])).rows[0].id;
        return res.status(201).send({id,shortUrl});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function getUrl(req, res) {
    const {id} = req.params;
    try {
        const shortendUrlInfo = await db.query(`SELECT * FROM short_urls WHERE id = $1`,[id]);
        if(shortendUrlInfo.rowCount == 0) return res.sendStatus(404);
        return res.status(200).send({id:shortendUrlInfo.rows[0].id,shortUrl:shortendUrlInfo.rows[0].shorturl, url: shortendUrlInfo.rows[0].url});
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function openUrl(req, res) {

    const path = req.params.shortUrl;

    try {
        const shortendUrlInfo = await db.query(`SELECT * FROM short_urls WHERE shorturl = $1`,[path]);
        if(shortendUrlInfo.rowCount == 0) return res.sendStatus(404);
        await db.query(`UPDATE short_urls SET "visitCount" = "visitCount" + 1 WHERE shorturl = $1`,[path]);
        return res.redirect(shortendUrlInfo.rows[0].url);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function deleteUrl(req, res) {
    const {id} = req.params;
    try {
        const shortendUrlInfo = await db.query(`SELECT * FROM short_urls WHERE id = $1`,[id]);
        if(shortendUrlInfo.rowCount == 0) return res.sendStatus(404);
        const userId = (await db.query(`SELECT * FROM users WHERE email=$1`,[res.locals.user.email])).rows[0].id;
        if(userId !== shortendUrlInfo.rows[0].owner_id) return res.sendStatus(401);
        await db.query(`DELETE FROM short_urls WHERE id = $1`,[id]);
        return res.sendStatus(204);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}