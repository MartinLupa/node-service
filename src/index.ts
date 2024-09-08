const express = require('express');
import responseTime from 'response-time';
import type { Request, Response } from 'express';
import { restResponseTimeHistogram, startMetricsServer } from '../utils/metrics';

const app = express();

const SERVICE_PORT = process.env.MAIN_SERVICE_PORT ?? 3000;

/**
 * Middlewares
 */
app.use(
  responseTime((req: Request, res: Response, time: number) => {
    if (req.route.path) {
      restResponseTimeHistogram.observe(
        { method: req.method, route: req.route.path, status_code: res.statusCode },
        time / 1000,
      );
    }
  }),
);

/**
 * Routes
 */
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(SERVICE_PORT, () => {
  console.info(`[mainServer] started on port ${SERVICE_PORT}`);
});

startMetricsServer();
