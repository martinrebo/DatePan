import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import config from '../util/mongoApi'
const router = Router();

router.get("/", (req: Request, res: Response) => {
  logger.info("GET /wuds/:city");
});

router.post("/createGroup", ash( async (req: Request, res: Response) => {
  logger.info("POST WTF /wud")
  const dataUpdate =  {
        collection: 'groups',
        database: "wudtimeDB",
        dataSource: "clusterWudTime0",
        document: req.body.data
    }
  const APIconfig = {
    ...config,
    url: config.url + "insertOne",
    data: JSON.stringify(dataUpdate)
  };

  try {
    const response = await axios(APIconfig)
    logger.info('OK - Update joiner checked status /wud/join/:id')
    res.status(200).send(response.data).end()
  }
  catch (error) {
    logger.err(error, true)
    res.status(400).send(error).end()
  }


}));

router.get("/wud/:id", (req: Request, res: Response) => {
  logger.info("GET /wud/:id");

});




export default router;