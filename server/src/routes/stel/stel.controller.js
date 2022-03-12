const {
    receiveStelMeasurements,
    getAllStelMeasurements,
} = require('../../models/stel.model');

const generalStelSchemaValidation = require('../../utils/apiValidation/stelPostValidation');
const { getAllStelBloodPressures } = require('../../models/stel/stel.model.bp');
const { getAllStelSpo2s } = require('../../models/stel/stel.model.spo2');
const { getAllStelEKGs } = require('../../models/stel/stel.model.ekg');

function httpReceiveStelMeasurements(req, res) {
    const measurement = req.body;

    //TODO: validation
    const validationResult = generalStelSchemaValidation(measurement);

    if (validationResult != undefined) {
        return res.status(400).json({
            "result": validationResult,
        })
    } else {
        receiveStelMeasurements(measurement);
        return res.status(201).json(measurement);
    };

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

function httpGetAllStelEKGs(req, res) {
    return res.status(200).json(getAllStelEKGs());
}

module.exports = {
    httpReceiveStelMeasurements,
    httpGetAllStelMeasurements,
    httpGetAllStelBloodPressures,
    httpGetAllStelSpo2s,
    httpGetAllStelEKGs,
};