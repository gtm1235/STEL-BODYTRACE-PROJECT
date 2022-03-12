const { convertDataGlucose } = require('../../utils/utils');

let latestMeasurement = 0;

const stelGlucoseMeasurements = new Map();

function addStelGlucoseMeasurements(data) {
    latestMeasurement += 1;

    const convertedData = convertDataGlucose(data)

    stelGlucoseMeasurements.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelGlucoseMeasurements() {
    return Array.from(stelGlucoseMeasurements.values());
}

module.exports = {
    getAllStelGlucoseMeasurements,
    addStelGlucoseMeasurements,
};