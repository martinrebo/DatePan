import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import http from 'http';
import helmet from 'helmet';
import StatusCodes from 'http-status-codes';
import express, { NextFunction, Request, Response, Router } from 'express';
import cors from 'cors';

import 'express-async-errors';

import BaseRouter from './routes/api';
import Healtcheck from './routes/system'
import logger from 'jet-logger';
import { cookieProps } from '@routes/auth-router';
import { CustomError } from '@shared/errors';

const router = Router();

const app = express();



/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser(cookieProps.secret));

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}


// Add APIs
app.use('/', Healtcheck)
app.use('/api', BaseRouter);

// Error handling
app.use((err: Error | CustomError, _: Request, res: Response, __: NextFunction) => {
    logger.err(err, true);
    const status = (err instanceof CustomError ? err.HttpStatus : StatusCodes.BAD_REQUEST);
    return res.status(status).json({
        error: err.message,
    });
});

const api = http.createServer(app);

const serverStartMsg = 'API server started on port: ',
port = (process.env.PORT || 3001);

api.listen(port, () => {
   logger.info(serverStartMsg + port);
});



export default api;

