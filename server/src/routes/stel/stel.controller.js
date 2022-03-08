const {
    receiveStelMeasurements,
    getAllStelMeasurements,
} = require('../../models/stel.model');

const {
    getAllStelBloodPressures
 } = require('../../models/stel/stel.model.bp');

 const {
    getAllStelSpo2s
 } = require('../../models/stel/stel.model.spo2');

function httpReceiveStelMeasurements(req, res) {
    const measurement = req.body;

//TODO: validation

    receiveStelMeasurements(measurement);
    return res.status(201).json(measurement);
}

function httpGetAllStelMeasurements(req, res) {
    return res.status(200).json(getAllStelMeasurements());
}

function httpGetAllStelBloodPressures(req, res) {
    return res.status(200).json(getAllStelBloodPressures());
}

function httpGetAllStelSpo2s(req, res) {
    return res.status(200).json(getAllStelSpo2s());
}

module.exports = {
    httpReceiveStelMeasurements,
    httpGetAllStelMeasurements,
    httpGetAllStelBloodPressures,
    httpGetAllStelSpo2s,
};