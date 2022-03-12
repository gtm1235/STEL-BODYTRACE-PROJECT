const express = require('express');

const {
    httpReceiveStelMeasurements,
    httpGetAllStelMeasurements,
    httpGetAllStelBloodPressures,
    httpGetAllStelSpo2s,
    httpGetAllStelEKGs,
    httpGetAllStelGlucoseMeasurements,
} = require('./stel.controller');

const stelRouter = express.Router();

stelRouter.post('/', httpReceiveStelMeasurements);
stelRouter.get('/', httpGetAllStelMeasurements);
stelRouter.get('/bp', httpGetAllStelBloodPressures);
stelRouter.get('/spo2', httpGetAllStelSpo2s);
stelRouter.get('/ekg', httpGetAllStelEKGs);
stelRouter.get('/glucose', httpGetAllStelGlucoseMeasurements);

module.exports = stelRouter;