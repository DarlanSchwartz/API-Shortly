import db from '../database/database.connection.js';

export async function getRanking(req, res) {
    try {
        const query = `
            SELECT users.id, users.name,
                COUNT(short_urls.id) AS "linksCount",
                COALESCE(SUM(short_urls."visitCount"), 0) AS "visitCount"
            FROM users
            LEFT JOIN short_urls ON users.id = short_urls.owner_id
            GROUP BY users.id, users.name
            ORDER BY "visitCount" DESC
            LIMIT 10;
        `;
        const result = await db.query(query);

        return res.status(200).send(result.rows);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}