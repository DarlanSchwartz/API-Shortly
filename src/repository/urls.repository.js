import db from "../database/database.connection.js";

export async function getShortenUrlInfoById(id) {
    try {
        const shortendUrlInfo = await db.query(`SELECT * FROM short_urls WHERE id = $1`, [id]);
        return shortendUrlInfo.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function getShortenUrlInfoByPath(path) {
    try {
        const shortendUrlInfo = await db.query(`SELECT * FROM short_urls WHERE shorturl = $1`, [path]);
        return shortendUrlInfo.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function increaseVisitCountOfUrl(path) {
    try {
        const shortUrl = await db.query(`UPDATE short_urls SET "visitCount" = "visitCount" + 1 WHERE shorturl = $1`,[path]);
        return shortUrl.rows[0];
    } catch (error) {
        console.log(error);
        return null;
    }
}


export async function deleteUrlById(id) {
    try {
        const shortUrl = await db.query(`DELETE FROM short_urls WHERE id = $1`,[id]);
        return shortUrl;
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function createUrlFromHash(original,hash,userId) {
    try {
        const shortUrl = await db.query(`INSERT INTO short_urls (shorturl,url,owner_id,"visitCount") 
        VALUES( $1,$2,$3,$4 )`,
        [hash,original,userId,0]);
        return shortUrl;
    } catch (error) {
        console.log(error);
        return null;
    }
}