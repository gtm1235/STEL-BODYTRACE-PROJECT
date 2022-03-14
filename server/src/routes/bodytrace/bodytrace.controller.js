const {
    receiveBodytraceMeasurements,
    getAllBodytraceMeasurements,
} = require('../../models/bodytrace.model');

const generalBodytraceSchemaValidation = require('../../utils/apiValidation/bodytrace/bodytracePostValidation');
const { getAllBodytraceBloodPressures } = require('../../models/bodytrace/bodytrace.model.bp');
const { getAllBodytraceWeights } = require('../../models/bodytrace/bodytrace.model.bp');

function httpReceiveBodytraceMeasurements(req, res) {
    const measurement = req.body;

    //TODO: validation
    const validationResult = generalBodytraceSchemaValidation(measurement);

    if (validationResult != undefined) {
        return res.status(400).json({
            "result": validationResult,
        });
    } else {
        receiveBodytraceMeasurements(measurement);
        return res.status(201).json(measurement);
    };
}

function httpGetAllBodytraceMeasurements(req, res) {
    return res.status(200).json(getAllBodytraceMeasurements());
};

function httpGetAllBodytraceBloodPressures(req, res) {
    return res.status(200).json(getAllBodytraceBloodPressures());
};

function httpGetAllBodytraceWeights(req, res) {
    return res.status(200).json(getAllBodytraceWeights());
};


module.exports = {
    httpReceiveBodytraceMeasurements,
    httpGetAllBodytraceMeasurements,
    httpGetAllBodytraceBloodPressures,
    httpGetAllBodytraceWeights,
};