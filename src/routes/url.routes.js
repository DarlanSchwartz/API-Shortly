import { Router } from "express";
import validateAuth from "../middlewares/validateAuth.js"; // ---> validateAuth can be used to check if header Authorization is valid and or for example, lives in the database?!
import { createUrl, deleteUrl, getUrl, openUrl } from "../controllers/urls.controller.js";
import validateSchema from "../middlewares/validateSchema.js";
import { URLSchema } from "../schemas/url.schemas.js";

const urlRouter = Router();

urlRouter.get('/urls/open/:shortUrl', openUrl);
urlRouter.get('/urls/:id', getUrl);
urlRouter.delete('/urls/:id',validateAuth, deleteUrl);
urlRouter.post('/urls/shorten' ,validateAuth, validateSchema(URLSchema) ,createUrl);

export default urlRouter;