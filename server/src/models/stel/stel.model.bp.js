const { convertDataBloodPressure } = require('../../utils/utils');

let latestMeasurement = 0;



const stelBloodPressures = new Map();

function addStelBloodPressures(data) {
    latestMeasurement += 1;

    const convertedData = convertDataBloodPressure(data)

    stelBloodPressures.set(latestMeasurement, 
        Object.assign(convertedData,
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelBloodPressures() {
    return Array.from(stelBloodPressures.values());
}

module.exports = {
    getAllStelBloodPressures,
    addStelBloodPressures,
};
