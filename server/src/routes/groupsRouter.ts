import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import config from '../util/mongoApi'
const router = Router();

router.get("/wuds/:city", (req: Request, res: Response) => {
  logger.info("GET /wuds/:city");
});

router.post("/wud", (req: Request, res: Response) => {
  logger.info("POST WTF /wud");
});

router.get("/wud/:id", (req: Request, res: Response) => {
  logger.info("GET /wud/:id");

});




export default router;