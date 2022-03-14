const express = require('express');

const {
    httpReceiveBodytraceMeasurements,
    httpGetAllBodytraceMeasurements,
    httpGetAllBodytraceBloodPressures,
    httpGetAllBodytraceWeights,
} = require('./bodytrace.controller');

const bodytraceRouter = express.Router();

bodytraceRouter.post('/', httpReceiveBodytraceMeasurements);
bodytraceRouter.get('/', httpGetAllBodytraceMeasurements);
bodytraceRouter.get('/bp', httpGetAllBodytraceBloodPressures);
bodytraceRouter.get('/weight', httpGetAllBodytraceWeights);

module.exports = bodytraceRouter;