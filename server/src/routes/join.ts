import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';
import config from '../util/mongoApi'
const router = Router();

router.post("/", (req: Request, res: Response) => {
    logger.info("POST /wuds/join");
    const dataUpdate = {
      ...config.data,
      filter: {
        _id: { $oid: req.body.data.id },
      },
      update: {
        $push: {
          joiners: req.body.data.user,
        },
      },
    };
    const wudJoinConfig = {
      ...config,
      url: config.url + "updateOne",
      data: JSON.stringify(dataUpdate),
    };
  
    axios(wudJoinConfig)
      .then(function (response) {
        res.status(200).send({ status: 200, data: response.data }).end();
      })
      .catch(function (error) {
        res.status(400).send({ status: 400, message: error }).end();
      });
  });
  
  router.post("/:id", ash(async (req: Request, res: Response) => {
    logger.imp("POST - UPDATE joiner checked status /wuds/join/:id ");
    const noUserId = crypto.randomBytes(8).toString("hex");
    const userId = req.body.data.joinerId;
    let filter
    let update
    if (userId === 'notUser') {
      filter = {
        _id: { $oid: req.params.id }
      }
      update = {
        $push: {
          joiners: {
            id: noUserId,
            photoURL: '',
            displayName: req.body.data.participant.name,
            contact: req.body.data.participant.contact,
            checked: req.body.data.checked
          }
        }
      }
    } else {
      filter = {
        _id: { $oid: req.params.id },
        'joiners.id': req.body.data.joinerId
      }
      update = {
        $set: { "joiners.$.checked": req.body.data.checked }
      }
    }
    const dataUpdate = {
      ...config.data,
      filter, update
    }
  
    const wudConfig = {
      ...config,
      url: config.url + "updateOne",
      data: JSON.stringify(dataUpdate),
    };
  
    try {
      const response = await axios(wudConfig)
      logger.info('OK - Update joiner checked status /wuds/join/:id')
      res.status(200).send(response.data).end()
    }
    catch (error) {
      logger.err(error, true)
      res.status(400).send(error).end()
    }
  
  }));
  
  router.get("/myjoinedwuds/:userId", (req: Request, res: Response) => {
    logger.info("GET  /api/wuds/myjoinedwuds");
    const myjoinedWudsConfig = {
      ...config,
      url: config.url + "find",
      data: JSON.stringify({
        ...config.data,
        filter: {
          "joiners.id": req.params.userId,
        },
      }),
    };
  
    axios(myjoinedWudsConfig)
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

  export default router