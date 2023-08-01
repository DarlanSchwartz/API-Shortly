import { Router } from "express";
import homeRouter from "./home.routes.js";
import accountRouter from "./account.routes.js";
import urlRouter from "./url.routes.js";

const router = Router();

router.use(homeRouter);
router.use(accountRouter);
router.use(urlRouter);

export default router;