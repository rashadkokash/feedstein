import * as express from 'express';
import * as bodyParser from 'body-parser';

import apiRouter from './routes/v1';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', apiRouter);

export default app;
