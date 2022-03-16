const { convertDataWeight } = require('../../utils/utils');

let latestMeasurement = 0;

const stelWeights = new Map();

function addStelWeights(data) {
    latestMeasurement += 1;

    const convertedData = convertDataWeight(data)
    stelWeights.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelWeights() {
    return Array.from(stelWeights.values());
}

module.exports = {
    getAllStelWeights,
    addStelWeights,
};
