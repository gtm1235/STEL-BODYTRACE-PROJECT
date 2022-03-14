const express = require('express');

const {
    httpReceiveStelMeasurements,
    httpGetAllStelMeasurements,
    httpGetAllStelBloodPressures,
    httpGetAllStelSpo2s,
    httpGetAllStelEKGs,
    httpGetAllStelGlucoseMeasurements,
    httpGetAllStelINRs,
    httpGetAllStelPillCapMeasurements,
    httpGetAllStelSpirometrys
} = require('./stel.controller');

const stelRouter = express.Router();

stelRouter.post('/', httpReceiveStelMeasurements);
stelRouter.get('/', httpGetAllStelMeasurements);
stelRouter.get('/bp', httpGetAllStelBloodPressures);
stelRouter.get('/spo2', httpGetAllStelSpo2s);
stelRouter.get('/ekg', httpGetAllStelEKGs);
stelRouter.get('/glucose', httpGetAllStelGlucoseMeasurements);
stelRouter.get('/inr', httpGetAllStelINRs);
stelRouter.get('/pillcap', httpGetAllStelPillCapMeasurements);
stelRouter.get('/spirometry', httpGetAllStelSpirometrys);

module.exports = stelRouter;