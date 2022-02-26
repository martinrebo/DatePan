import { Request, Response, Router } from 'express';

const router = Router();

router.get("/ping", (req: Request, res: Response) => {
    res.status(200).send({status: 200}).end()
})

export default router;