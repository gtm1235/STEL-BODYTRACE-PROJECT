const express = require('express');

const {
    httpReceiveStelMeasurements,
    httpGetAllStelMeasurements,
    httpGetAllStelBloodPressures,
    httpGetAllStelSpo2s
} = require('./stel.controller');

const stelRouter = express.Router();

stelRouter.post('/', httpReceiveStelMeasurements);
stelRouter.get('/', httpGetAllStelMeasurements);
stelRouter.get('/bp', httpGetAllStelBloodPressures);
stelRouter.get('/spo2', httpGetAllStelSpo2s);

module.exports = stelRouter;