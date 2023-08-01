import { Router } from "express";
import { getRanking } from "../controllers/home.controller.js";

const homeRouter = Router();

homeRouter.get('/ranking', getRanking); 

export default homeRouter;