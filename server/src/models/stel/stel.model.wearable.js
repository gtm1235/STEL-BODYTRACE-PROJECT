const { convertDataWearable } = require('../../utils/utils');

let latestMeasurement = 0;

const stelWearableMeasurements = new Map();

function addStelWearableMeasurements(data) {
    latestMeasurement += 1;

    const convertedData = convertDataWearable(data)
    stelWearableMeasurements.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelWearableMeasurements() {
    return Array.from(stelWearableMeasurements.values());
}

module.exports = {
    getAllStelWearableMeasurements,
    addStelWearableMeasurements,
};
