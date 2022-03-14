const { flattenJSON } = require('../utils/utils');
const { addBodytraceBloodPressures } = require('./bodytrace/Bodytrace.model.bp');
const { addBodytraceWeights } = require('./bodytrace/bodytrace.model.weight');

const bodytraceMeasurements = new Map();

let latestMeasurement = 0;


function receiveBodytraceMeasurements(data) {
    latestMeasurement += 1;
    // if (data.measure.type == "bloodpressure") {
    //     addBodytraceBloodPressures(data);
    // } e;
    switch (data.measure.type) {
        case "bloodpressure":
            addBodytraceBloodPressures(data);
            break;
        case "weight":
            addBodytraceWeights(data);
            break;
    }

    bodytraceMeasurements.set(latestMeasurement,
        Object.assign(flattenJSON(data),
            {
                measurementNumber: latestMeasurement,
            }
        ));
}

function getAllBodytraceMeasurements() {
    return Array.from(bodytraceMeasurements.values());
}

module.exports = {
    receiveBodytraceMeasurements,
    getAllBodytraceMeasurements
};
