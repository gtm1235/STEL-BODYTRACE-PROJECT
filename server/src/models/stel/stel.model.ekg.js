const { convertDataEKG } = require('../../utils/utils');

let latestMeasurement = 0;

const stelEKGs = new Map();

function addStelEKGs(data) {
    latestMeasurement += 1;

    const convertedDataEKG = convertDataEKG(data)

    stelEKGs.set(latestMeasurement,
        Object.assign(convertedDataEKG,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelEKGs() {
    return Array.from(stelEKGs.values());
}

module.exports = {
    getAllStelEKGs,
    addStelEKGs,
};
