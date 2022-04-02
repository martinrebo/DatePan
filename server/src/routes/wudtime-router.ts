import { Request, Response, Router } from 'express';
import logger from 'jet-logger';

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.status(200).send({status: 200}).end()
})

router.post("/wud", (req: Request, res: Response) => {
    logger.info("POST /api/wuds",);
    console.log(req.body)
    res.status(200).send({status: 200}).end()
})





export default router;