import crypto from 'crypto';
import { Request, Response, Router } from "express";
import logger from "jet-logger";
import axios from "axios";
import ash from 'express-async-handler';

// let axios = require('axios').default;
// DOCS: https://www.mongodb.com/docs/atlas/api/data-api-resources/#std-label-data-api-resources
const config = {
  method: "post",
  url: "https://data.mongodb-api.com/app/data-ftset/endpoint/data/beta/action/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key":
      "C7GoSGjfGKgUUyRed2k0Aw4lvW2xfM9snUOePYFHjwp4bxjVBuac6ccQwyoJ05C8",
  },
  data: {
    collection: "events",
    database: "wudtimeDB",
    dataSource: "clusterWudTime0",
  },
} as const;

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).send({ status: 200 }).end();
});

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

router.post("/wud/join", (req: Request, res: Response) => {
  logger.info("POST /wud/join");
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

  // console.log(wudJoinConfig);

  axios(wudJoinConfig)
    .then(function (response) {
      // console.log(response.data);
      res.status(200).send({ status: 200, data: response.data }).end();
    })
    .catch(function (error) {
      // console.log(error);
      res.status(400).send({ status: 400, message: error }).end();
    });
  // res.status(200);
});

router.post("/wud/join/:id", ash(async (req: Request, res: Response) => {
  logger.imp("POST - UPDATE joiner checked status /wud/:id ");
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
    logger.info('OK - Update joiner checked status /wud/join/:id')
    res.status(200).send(response.data).end()
  }
  catch (error) {
    logger.err(error, true)
    res.status(400).send(error).end()
  }

}));



router.get("/mywuds/:userId", (req: Request, res: Response) => {
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
      res.status(400).send({ status: 400, message: error }).end();
    });
});

router.put("/mywuds/:userId", (req: Request, res: Response) => {
  logger.imp("ENDPOINT ACTIVATED: /mywuds/:userId")
  res.status(200).send("OK").end()
})

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

export default router;
