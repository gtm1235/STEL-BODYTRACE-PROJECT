const { convertDataTemperature } = require('../../utils/utils');

let latestMeasurement = 0;

const stelTemperatureMeasurements = new Map();

function addStelTemperatures(data) {
    latestMeasurement += 1;

    const convertedData = convertDataTemperature(data)

    stelTemperatureMeasurements.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelTemperatures() {
    return Array.from(stelTemperatureMeasurements.values());
}

module.exports = {
    getAllStelTemperatures,
    addStelTemperatures,
};