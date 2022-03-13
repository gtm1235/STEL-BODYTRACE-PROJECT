const { convertDataPillCap } = require('../../utils/utils');

let latestMeasurement = 0;

const stelPillCapMeasurements = new Map();

function addStelPillCapMeasurements(data) {
    latestMeasurement += 1;

    const convertedData = convertDataPillCap(data)

    stelPillCapMeasurements.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelPillCapMeasurements() {
    return Array.from(stelPillCapMeasurements.values());
}

module.exports = {
    getAllStelPillCapMeasurements,
    addStelPillCapMeasurements,
};