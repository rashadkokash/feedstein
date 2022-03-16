import * as express from 'express';
import * as bodyParser from 'body-parser';

import apiRouter from './routes/v1';
import logger from './infra/logger';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);

app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    logger.error(err);
    res.status(500).json({
      error: {
        message: 'Something wrong happened',
      },
    });
  }
);

export default app;
