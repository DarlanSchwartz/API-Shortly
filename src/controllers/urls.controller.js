import db from '../database/database.connection.js';
import { nanoid } from 'nanoid';
import { createUrlFromHash, deleteUrlById, getShortenUrlInfoById, getShortenUrlInfoByPath, increaseVisitCountOfUrl } from '../repository/urls.repository.js';
import { getInfoFromUser } from '../repository/account.repository.js';

export async function createUrl(req, res) {
    const { url } = req.body;
    try {
        const user = await getInfoFromUser(res.locals.user.email);
        const hash = nanoid(6);
        await createUrlFromHash(url, hash, user.id);
        const shortURL = await getShortenUrlInfoByPath(hash);
        const id = shortURL.id;
        return res.status(201).send({ id, shortUrl: hash });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function getUrl(req, res) {
    const { id } = req.params;
    try {
        const shortURL = await getShortenUrlInfoById(id);
        if (!shortURL) return res.sendStatus(404);
        return res.status(200).send({ id: shortURL.id, shortUrl: shortURL.shorturl, url: shortURL.url });
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function openUrl(req, res) {
    try {
        const shortURL = await getShortenUrlInfoByPath(req.params.shortUrl);
        if (!shortURL) return res.sendStatus(404);
        await increaseVisitCountOfUrl(req.params.shortUrl);
        return res.redirect(shortURL.url);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}

export async function deleteUrl(req, res) {
    const { id } = req.params;
    try {
        const shortURL = await getShortenUrlInfoById(id);
        if (!shortURL) return res.sendStatus(404);
        const user = await getInfoFromUser(res.locals.user.email);
        if (user.id !== shortURL.owner_id) return res.sendStatus(401);
        await deleteUrlById(id);
        return res.sendStatus(204);
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error');
    }
}