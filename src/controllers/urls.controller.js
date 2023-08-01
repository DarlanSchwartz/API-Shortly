import db from '../database/database.connection.js';
import { nanoid } from 'nanoid';

export async function createUrl(req, res) {
    const {id} = req.params;
    try {
        
        return res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function getUrl(req, res) {
    const {id} = req.params;
    try {
        const url = null;
        return res.status(200).send(url);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function openUrl(req, res) {
    try {
        const url = null;
        return res.redirect(url);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}

export async function deleteUrl(req, res) {
    const {id} = req.params;
    try {
        
        return res.sendStatus(204);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}