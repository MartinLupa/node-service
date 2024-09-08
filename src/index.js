"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var response_time_1 = require("response-time");
var metrics_1 = require("../utils/metrics");
var app = (0, express_1.default)();
var SERVICE_PORT = (_a = process.env.MAIN_SERVICE_PORT) !== null && _a !== void 0 ? _a : 3000;
/**
 * Middlewares
 */
app.use((0, response_time_1.default)(function (req, res, time) {
    if (req.route.path) {
        metrics_1.restResponseTimeHistogram.observe({ method: req.method, route: req.route.path, status_code: res.statusCode }, time / 1000);
    }
}));
/**
 * Routes
 */
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.listen(SERVICE_PORT, function () {
    console.info("[mainServer] started on port ".concat(SERVICE_PORT));
});
(0, metrics_1.startMetricsServer)();
