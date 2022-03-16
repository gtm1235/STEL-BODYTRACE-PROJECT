const Joi = require('joi');
const validateBp = require('./bp.validate');
const validateEKG = require('./ekg.validate');
const validateSpO2 = require('./pulseox.validate');
const validateGlucose = require('./glucose.validate');
const validateINR = require('./inr.validate');
const validatePillCap = require('./pillcap.validate');
const validateSpirometry = require('./spirometry.validate');
const validateTemperature = require('./temperature.validate');
const validateWearable = require('./wearable.validate');
const validateWeight = require('./weight.validate')


/*
JOI Validation script is for JSON General Data Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

{
  "id": "35263822-7b2e-4683-8720-d31ffb12149b",
  "meta": {
    "schemaVersion": "stel-v2.0"
  },
  "hubId": "ABCDE12345",
  "transmissionTime": "2021-11-29T16:18:10+00:00",
  "device": {
    "mac": "AB:CD:EF:12:34:56",
    "make": "A&D"|null,
    "model": "BP Cuff"|null
  },
  "measure": {
  "type": "bloodpressure",
  "time": "2021-11-29T16:18:10+00:00"
  }
}

*/
function generalStelSchemaValidation(data) {
  const measurementData = data.measure.data;
  //console.log(measurementData);

  const generalStelSchema = Joi.object({
    id: Joi.string()
      .length(36)
      .strict()
      .required(),

    meta: Joi.object({})
    .required(),

    meta: {
      schemaVersion: Joi.string()
      .strict()
      .required()
    },

    hubId: Joi.string()
      .alphanum()
      .strict()
      .required(),

    transmissionTime: Joi.date()
      .required(),

    device: {
      mac: Joi.string()
        .pattern(new RegExp('^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$'))
        .required(),

      make: Joi.alternatives()
        .try(Joi.string(), Joi.number(), null)
        .required(),

      model:Joi.alternatives()
      .try(Joi.string(), Joi.number(), null)
      .required(),
    },

    measure: {
      "type": Joi.string()
      .strict()
        .required()
        .valid(
          "bloodpressure",
          "ekg",
          "glucose",
          "inr",
          "pillcap",
          "pulseox",
          "spirometry",
          "temperature",
          "wearable",
          "weight"
        ),


      "time": Joi.date()
        .required(),

      "data": Joi.object()
        .required()

    },
  })

  const { error, value } = generalStelSchema.validate(data)
 
  // If General Data validation returns undefined or correct validation script moves on
  // to validation for specific measurements

  if (error != undefined) {
    return error.details[0].message
  }

  switch (data.measure.type) {
    case "bloodpressure":
      const returnValueBP = validateBp(measurementData);
      return returnValueBP;
      break;
    case "ekg":
      const returnValueEKG = validateEKG(measurementData);
      return returnValueEKG;
      break;
    case "glucose":
      const returnValueGlucose = validateGlucose(measurementData);
      return returnValueGlucose;
      break;
    case "inr":
      const returnValueINR = validateINR(measurementData);
      return returnValueINR;
      break;
    case "pillcap":
      const returnValuePillCap = validatePillCap(measurementData);
      return returnValuePillCap;
      break;
    case "pulseox":
      const returnValueSpO2 = validateSpO2(measurementData);
      return returnValueSpO2;
      break;
    case "spirometry":
      const returnValueSpirometry = validateSpirometry(measurementData);
      return returnValueSpirometry;
      break;
    case "temperature":
      const returnValueTemperature = validateTemperature(measurementData);
      return returnValueTemperature;
      break;
    case "wearable":
      const returnValueWearable = validateWearable(measurementData);
      return returnValueWearable;
      break;
    case "weight":
      const returnValueWeight = validateWeight(measurementData);
      return returnValueWeight;
      break;
  }
}




// const dataBP = {
//   "id": "35263822-7b2e-4683-8720-d31ffb12149b",
//   "meta": {
//     "schemaVersion": "stel-v2.0"
//   },
//   "hubId": "ABCDE12345",
//   "transmissionTime": "2021-11-29T16:18:10+00:00",
//   "device": {
//     "mac": "AB:CD:EF:12:34:5E",
//     "make": null,
//     "model": "BP Cuff"
//   },
//   "measure": {
//     "type": "inr",
//     "time": "2021-11-29T16:18:10+00:00",
//     "data": {
//       "inr": {
//         "value": 2.4,
//         "unit": null
//       },
//       "pt": {
//           "value": 1.327,
//           "unit": "secs"  
//       },
//       "control": {
//           "value": "high",
//           "unit": null 
//       },
//       "status": {
//           "value": "pass",
//           "unit": null
//       }
//     }
//   }
// }

// const result = generalStelSchemaValidation(dataBP);
// console.log(result)
module.exports = generalStelSchemaValidation;