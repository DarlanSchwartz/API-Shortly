import { getOverallRanking } from '../repository/home.repository.js';

export async function getRanking(req, res) {
    try {
        const ranking = await getOverallRanking();
        return res.status(200).send(ranking);
    } catch (error) {
        console.log(error);
        return res.status(500).send('Internal server error');
    }
}