import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import config from '../util/mongoApi'

const router = Router();

router.get("/:userId", (req: Request, res: Response) => {
  logger.info("GET  /api/wuds/mywuds");
  const myWudsConfig = {
    ...config,
    url: config.url + "find",
    data: JSON.stringify({
      ...config.data,
      filter: {
        "data.userId": req.params.userId,
      },
    }),
  };

  axios(myWudsConfig)
    .then(function (response) {
      res
        .status(200)
        .send({ status: 200, documents: response.data.documents })
        .end();
    })
    .catch(function (error) {
      logger.err("GET  /api/wuds/mywuds");
      res.status(400).send({ status: 400, message: error }).end();
    });
});

router.put("/:userId", (req: Request, res: Response) => {
  logger.imp("ENDPOINT ACTIVATED: /mywuds/:userId")
  res.status(200).send("OK").end()
})


export default router;
