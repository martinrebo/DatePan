import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import { db as config }from '../util/mongoApi'
const router = Router();

router.get("/", (req: Request, res: Response) => {
  logger.info("GET /wuds/groups");
});

router.post("/createGroup", ash( async (req: Request, res: Response) => {
  logger.info(" POST /wuds/createGroup")
  const dataUpdate =  {
        collection: 'groups',
        database: "wudtimeDB",
        dataSource: "clusterWudTime0",
        document: {groupData: req.body.data, uid: req.body.userId }
    }
  const APIconfig = {
    ...config,
    url: config.url + "insertOne",
    data: JSON.stringify(dataUpdate)
  };

  try {
    const response = await axios(APIconfig)
    logger.info('OK - Update joiner checked status /wuds/join/:id')
    res.status(200).send(response.data).end()
  }
  catch (error) {
    logger.err(error, true)
    res.status(400).send(error).end()
  }


}));

router.get("/:id", (req: Request, res: Response) => {
  logger.info("GET /wuds/groups/:id");
  // User get info about the group: Name / members / logo. 
});




export default router;