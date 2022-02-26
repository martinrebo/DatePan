import { Router } from 'express';
import { authMw } from './middleware';
import authRouter from './auth-router';
import userRouter from './user-router';
import chatRouter from './chat-router';
import sysRouter  from './system';

// Init
const apiRouter = Router();

// Add api routes
apiRouter.use('/system', sysRouter)
apiRouter.use('/auth', authRouter);
apiRouter.use('/users', authMw, userRouter);
apiRouter.use('/chat', authMw, chatRouter)

// Export default
export default apiRouter;
