import { v4 as uuid } from 'uuid';
import db from '../database/database.connection.js';


export async function signUp(req, res) {

    const { name, email, password, confirmPassword } = req.body;

    try {

        if (password !== confirmPassword) return res.status(422).send("Senhas precisam ser iguais!");

        const userExists = await db.query(`SELECT * FROM users WHERE "email"=$1`, [email]);

        if (userExists.rowCount > 0) return res.sendStatus(409);

        await db.query(`INSERT INTO users ("name", "email" ,"password") VALUES ( $1, $2, $3 )`, [name, email, password]);

        return res.sendStatus(201);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function signIn(req, res) {
    const { email } = req.body;
    try {
        const userExists = await db.query(`SELECT * FROM users WHERE "email"=$1`, [email]);

        if (userExists.rowCount == 0) return res.sendStatus(404);

        const generatedToken = uuid();
        const response = {
            token: generatedToken
        };

        await db.query(`INSERT INTO sessions ("email","token") VALUES ($1,$2)`, [email, generatedToken]);

        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}
/*

{
  "id": id do usuário,
    "name": nome do usuário,
    "visitCount": soma da quantidade de visitas de todos os links do usuário,
    "shortenedUrls": [
        {
            "id": 1,
            "shortUrl": "...",
            "url": "...",
            "visitCount": soma da quantidade de visitas do link
        },
        {
            "id": 2,
            "shortUrl": "...",'
            "url": "...",
            "visitCount": soma da quantidade de visitas do link
        }
    ]
}

*/


export async function getUserInfo(req, res) {
    try {
        const userInfo = await db.query(`SELECT * FROM users WHERE "email"=$1`, [res.locals.user.email]);

        const foundUserUrls = await db.query(`SELECT * FROM short_urls WHERE usuario_id=$1`, [userInfo.rows[0].id]);
        let allVisitsCount = 0;

        const userUrls = foundUserUrls.rows.map(url =>{
            delete url.usuario_id;
            delete url.createdat;
            allVisitsCount += Number(url.visitcount);
            return url;
        });

        const user =
        {
            id: userInfo.rows[0].id,
            name: userInfo.rows[0].name,
            visitCount: allVisitsCount,
            shortenedUrls: userUrls
        };

        return res.status(200).send(user);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}