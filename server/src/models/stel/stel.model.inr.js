const { convertDataINR } = require('../../utils/utils');

let latestMeasurement = 0;

const stelINRs = new Map();

function addStelINRs(data) {
    latestMeasurement += 1;

    const convertedData = convertDataINR(data)

    stelINRs.set(latestMeasurement, 
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelINRs() {
    return Array.from(stelINRs.values());
}

module.exports = {
    getAllStelINRs,
    addStelINRs,
};
