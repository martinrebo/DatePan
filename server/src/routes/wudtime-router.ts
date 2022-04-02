import { Request, Response, Router } from 'express';
import logger from 'jet-logger';
import axios from 'axios';

// let axios = require('axios').default;


const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send({status: 200}).end()
})

router.post("/wud", (req: Request, res: Response) => {
    logger.info("POST /api/wuds",);
    // console.log(req.body)

    const data = JSON.stringify({
        "collection": "events",
        "database": "wudtimeDB",
        "dataSource": "clusterWudTime0",
        "document": req.body
    });

    const config = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-ftset/endpoint/data/beta/action/insertOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'C7GoSGjfGKgUUyRed2k0Aw4lvW2xfM9snUOePYFHjwp4bxjVBuac6ccQwyoJ05C8'
        },
        data : data
    } as const;

    axios(config)
    .then(function (response) {
        // console.log(JSON.stringify(response.data));
        res.status(200).send({status: 200, data: response.data}).end()
    })
    .catch(function (error) {
        res.status(400).send({status: 400, message: "Error DB"}).end()
    });


})





export default router;