const flattenJSON = (data = {}, res = {}, extraKey = '') => {
    for(key in data){
       if(typeof data[key] !== 'object'){
          res[extraKey + key] = data[key];
       }else{
          flattenJSON(data[key], res, `${extraKey}${key}.`);
       };
    };
    return res;
 };

function convertDataBloodPressure(data) {
    return {
        measurementId: data.id,
        hubId: data.hubId,
        transmissionTime: data.transmissionTime,
        deviceMac: data.device.mac,
        deviceMake: data.device.make,
        deviceModel: data.device.model,
        measurementType: data.measure.type,
        measurementTime: data.measure.time,
        heartRate: data.measure.data.heartRate.value,
        hearRateUnits: data.measure.data.heartRate.unit,
        systolicBP: data.measure.data.systolic.value,
        diastolicBP: data.measure.data.diastolic.value,
        bpUnits: data.measure.data.diastolic.unit,
        irregularPulse: data.measure.data.irregularPulse.value,
    }
}

function convertDataSpo2(data) {
    return {
        measurementId: data.id,
        hubId: data.hubId,
        transmissionTime: data.transmissionTime,
        deviceMac: data.device.mac,
        deviceMake: data.device.make,
        deviceModel: data.device.model,
        measurementType: data.measure.type,
        measurementTime: data.measure.time,
        heartRate: data.measure.data.heartRate.value,
        hearRateUnits: data.measure.data.heartRate.unit,
        spo2: data.measure.data.spo2.value,
        spo2Units: data.measure.data.spo2.unit,
    }
}

module.exports = {
    convertDataBloodPressure,
    convertDataSpo2,
    flattenJSON,
}
