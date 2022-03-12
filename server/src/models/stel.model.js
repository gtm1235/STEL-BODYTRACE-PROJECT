
const { flattenJSON } = require('../utils/utils');
const { addStelBloodPressures } = require('./stel/stel.model.bp');
const { addStelEKGs } = require('./stel/stel.model.ekg');
const { addStelSpo2s } = require('./stel/stel.model.spo2');
const { addStelGlucoseMeasurements } = require('./stel/stel.model.glucose');


const stelMeasurements = new Map();

let latestMeasurement = 0;


function receiveStelMeasurements(data) {
    latestMeasurement += 1;
    // if (data.measure.type == "bloodpressure") {
    //     addStelBloodPressures(data);
    // } e;
    switch (data.measure.type) {
        case "bloodpressure":
            addStelBloodPressures(data);
            break;
        case "pulseox":
            addStelSpo2s(data);
            break;
        case "ekg":
            addStelEKGs(data);
            break;
        case "glucose":
            addStelGlucoseMeasurements(data);
            break;
    }

    stelMeasurements.set(latestMeasurement,
        Object.assign(flattenJSON(data),
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllStelMeasurements() {
    return Array.from(stelMeasurements.values());
}

module.exports = {
    receiveStelMeasurements,
    getAllStelMeasurements
};
