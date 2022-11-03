import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import config from '../util/mongoApi'
const router = Router();

router.get("/wuds/:city", (req: Request, res: Response) => {
  logger.info("GET /wuds/:city");

  const { city } = req.params;
  const wudsCityConfig = {
    ...config,
    url: config.url + "find",
    data: JSON.stringify({
      ...config.data,
      filter: {
        "data.city": city,
      },
    }),
  };

  axios(wudsCityConfig)
    .then(function (response) {
      res
        .status(200)
        .send({ status: 200, documents: response.data.documents })
        .end();
    })
    .catch(function (error) {
      res.status(400).send({ status: 400, message: error }).end();
    });
});

router.post("/wud", (req: Request, res: Response) => {
  logger.info("POST WTF /wud");
  const wudConfig = {
    ...config,
    url: config.url + "insertOne",
    data: JSON.stringify({
      ...config.data,
      document: req.body,
    }),
  };

  axios(wudConfig)
    .then(function (response) {
      res.status(200).send({ status: 200, data: response.data }).end();
    })
    .catch(function (error) {
      res.status(400).send({ status: 400, message: error }).end();
    });
});

router.get("/wud/:id", (req: Request, res: Response) => {
  logger.info("GET /wud/:id");

  const wudConfig = {
    ...config,
    url: config.url + "find",
    data: JSON.stringify({
      ...config.data,
      filter: {
        _id: { $oid: req.params.id },
      },
    }),
  };

  axios(wudConfig)
    .then(function (response) {
      res
        .status(200)
        .send({ status: 200, event: response.data.documents[0] })
        .end();
    })
    .catch(function (error) {
      res.status(400).send({ status: 400, message: error }).end();
    });
});




export default router;
