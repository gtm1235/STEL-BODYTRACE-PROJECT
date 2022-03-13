const flattenJSON = (data = {}, res = {}, extraKey = '') => {
    for (key in data) {
        if (typeof data[key] !== 'object') {
            res[extraKey + key] = data[key];
        } else {
            flattenJSON(data[key], res, `${extraKey}${key}.`);
        };
    };
    return res;
};

function generalDataJSON(data) {
    return {
        measurementId: data.id,
        hubId: data.hubId,
        transmissionTime: data.transmissionTime,
        deviceMac: data.device.mac,
        deviceMake: data.device.make,
        deviceModel: data.device.model,
        measurementType: data.measure.type,
        measurementTime: data.measure.time,
        };
};

function convertDataBloodPressure(data) {
    const generalData = generalDataJSON(data);
    if (!data.measure.data.irregularPulse) {
        data.measure.data.irregularPulse = {};
        data.measure.data.irregularPulse.value = null;
        data.measure.data.irregularPulse.unit = null;
    };
    return {
        generalData,
        bpHeartRate: data.measure.data.heartRate.value,
        bpHeartRateUnits: data.measure.data.heartRate.unit,
        SystolicBp: data.measure.data.systolic.value,
        DiastolicBp: data.measure.data.diastolic.value,
        bpUnits: data.measure.data.diastolic.unit,
        bpIrregularPulse: data.measure.data.irregularPulse.value,
    };
}

function convertDataSpo2(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        spo2HeartRate: data.measure.data.heartRate.value,
        spo2HeartRateUnits: data.measure.data.heartRate.unit,
        spo2: data.measure.data.spo2.value,
        spo2Units: data.measure.data.spo2.unit,
    };
}

function convertDataEKG(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        ekgIrregularPulse: data.measure.data.irregularPulse.value,
        ekgIrregularPulseUnits: data.measure.data.irregularPulse.unit,
    };
}

function convertDataGlucose(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        glucose: data.measure.data.glucose.value,
        glucoseUnits: data.measure.data.glucose.unit,
    };
}

/*
Handling Optional keys in post from Stel.  INR post may have INR, Control, and status
information, keys may or may not be present, JOI validation handles some info.  
Preparing data for entry into SQL DB
*/
function convertDataINR(data) {
    const generalData = generalDataJSON(data);
    if (!data.measure.data.inr) {
        data.measure.data.inr = {};
        data.measure.data.inr.value = null;
        data.measure.data.inr.unit = null;
    };

    if (!data.measure.data.control) {
        data.measure.data.control = {};
        data.measure.data.control.value = null;
        data.measure.data.control.unit = null;
    };

    if (!data.measure.data.status) {
        data.measure.data.status = {};
        data.measure.data.status.value = null;
        data.measure.data.status.unit = null;
    };
    return {
        generalData,
        inr: data.measure.data.inr.value,
        inrUnits: data.measure.data.inr.unit,
        pt: data.measure.data.pt.value,
        ptUnits: data.measure.data.pt.unit,
        inrControl: data.measure.data.control.value,
        inrStatus: data.measure.data.status.value,
    };
}

function convertDataPillBottle(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        data: data.measure.data,
    };
}

function convertDataSpirometer(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        fvc: data.measure.data.fvc.value,
        fvcUnits: data.measure.data.fvc.unit,
        fev1: data.measure.data.fev1.value,
        fev1Units: data.measure.data.fev1.unit,
        pef: data.measure.data.pef.value,
        pefUnits: data.measure.data.pef.unit,
        fev6: data.measure.data.fev6.value,
        fev6Units: data.measure.data.fev6.unit,
        fev1fev6: data.measure.data.fev1fev6.value,
        fev1fev6Units: data.measure.data.fev1fev6.unit,
    };
}

function convertDataTemperature(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        temperature: data.measure.data.temperature.value,
        temperatureUnits: data.measure.data.temperature.unit,
    };
}

function convertDataWearable(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        steps: data.measure.data.steps.value,
        stepsUnits: data.measure.data.steps.unit,
        wearableHeartRate: data.measure.data.heartRate.value,
        wearableHeartRateUnits: data.measure.data.spo2.unit,
    };
}

function convertDataWeight(data) {
    const generalData = generalDataJSON(data);
    return {
        generalData,
        weight: data.measure.data.weight.value,
        weightUnits: data.measure.data.weight.unit,
    };
}

module.exports = {
    convertDataBloodPressure,
    convertDataSpo2,
    convertDataEKG,
    convertDataGlucose,
    convertDataINR,
    convertDataPillBottle,
    convertDataSpirometer,
    convertDataTemperature,
    convertDataWearable,
    convertDataWeight,
    flattenJSON,
}
