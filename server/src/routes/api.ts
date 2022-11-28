import { Router } from "express";
import sysRouter from "./system";
import wudtimeRouter from "./wudtime-router";
import myWudsRouter from './mywuds'
import joinRouter from './join'
import groupsRouter from './groupsRouter'

// Init
const apiRouter = Router();

// Add api routes
apiRouter.use("/", sysRouter);
apiRouter.use("/wuds", wudtimeRouter);
apiRouter.use("/wuds/mywuds", myWudsRouter);
apiRouter.use("/wuds/join", joinRouter);
apiRouter.use("/wuds/groups", groupsRouter)

// Export default
export default apiRouter;
