import express from 'express';
import { Histogram, register, collectDefaultMetrics } from 'prom-client';

const app = express();

const METRICS_PORT = process.env.METRICS_SERVICE_PORT ?? 9100;

/**
 * Histogram metric for tracking REST API response times in seconds.
 * Labels:
 * - method: HTTP method (e.g., GET, POST)
 * - route: The specific API route (e.g., /api/users)
 * - status_code: HTTP status code returned (e.g., 200, 500)
 */
export const restResponseTimeHistogram = new Histogram({
  name: 'rest_response_time_duration_seconds',
  help: 'REST API response time in seconds',
  labelNames: ['method', 'route', 'status_code'],
});

/**
 * Histogram metric for tracking database response times in seconds.
 * Labels:
 * - operation: The database operation (e.g., SELECT, INSERT)
 * - success: Boolean indicating whether the operation succeeded (true/false)
 */
export const databaseResponseTimeHistogram = new Histogram({
  name: 'db_response_time_duration_seconds',
  help: 'Database response time in seconds',
  labelNames: ['operation', 'success'],
});

/**
 * Starts the metrics server, exposing Prometheus metrics on the /metrics endpoint.
 * It collects default metrics like CPU, memory usage, etc., and registers custom histograms.
 */
export function startMetricsServer() {
  // Collect default system-level metrics (CPU, memory, etc.)
  collectDefaultMetrics();

  app.get('/metrics', async (req, res) => {
    res.set('Content-Type', register.contentType);

    // Return all registered metrics
    return res.send(await register.metrics());
  });

  app.listen(METRICS_PORT, () => {
    console.info(`[metricsServer] started on ${METRICS_PORT}`);
  });
}
