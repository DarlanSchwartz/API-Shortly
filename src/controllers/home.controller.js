import db from '../database/database.connection.js';

export async function getRanking(req, res) {
    try {
        const query = `
            SELECT users.id, users.name,
                COUNT(short_urls.id) AS linksCount,
                COALESCE(SUM(short_urls.visitcount), 0) AS visitCount
            FROM users
            LEFT JOIN short_urls ON users.id = short_urls.usuario_id
            GROUP BY users.id, users.name
            ORDER BY visitCount DESC
            LIMIT 5;
        `;
        const result = await db.query(query);

        const ranking = result.rows.map(url => {

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