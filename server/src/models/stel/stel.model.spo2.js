const { convertDataSpo2 } = require('../../utils/utils');

let latestMeasurement = 0;

const stelSpo2s = new Map();

function addStelSpo2s(data) {
    latestMeasurement += 1;

    const convertedData = convertDataSpo2(data)

    stelSpo2s.set(latestMeasurement,
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelSpo2s() {
    return Array.from(stelSpo2s.values());
}

module.exports = {
    getAllStelSpo2s,
    addStelSpo2s,
};
