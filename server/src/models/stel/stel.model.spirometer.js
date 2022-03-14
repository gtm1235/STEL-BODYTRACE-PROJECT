const { convertDataSpirometry } = require('../../utils/utils');

let latestMeasurement = 0;



const stelSpirometrys = new Map();

function addStelSpirometrys(data) {
    latestMeasurement += 1;

    const convertedData = convertDataSpirometry(data)

    stelSpirometrys.set(latestMeasurement, 
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelSpirometrys() {
    return Array.from(stelSpirometrys.values());
}

module.exports = {
    getAllStelSpirometrys,
    addStelSpirometrys,
};
