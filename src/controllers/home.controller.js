import db from '../database/database.connection.js';

export async function getRanking(req, res) {
    try {
        const query = `
            SELECT id, name,
                (SELECT SUM(visitcount) FROM "short_urls" WHERE usuario_id = users.id) AS linksCount,
                (SELECT COALESCE(SUM(visitcount), 0) FROM "short_urls" WHERE "usuario_id" = users.id) AS visitCount
            FROM users
            ORDER BY visitcount DESC
            LIMIT 10;
        `;
        const result = await db.query(query);

        const ranking = result.rows.map(url =>{
           
            url.linksCount = url.linkscount;
            url.visitCount = url.visitcount;
            delete url.linkscount;
            delete url.visitcount;
            return url;
        });

        return res.status(200).send(ranking);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}