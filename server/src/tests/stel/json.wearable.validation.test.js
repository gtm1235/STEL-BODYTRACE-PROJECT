//const request = require('supertest');
const generalStelSchemaValidation = require('../../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
       test('Wearable correct data-- It should respond with undefined', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableCorrect);
        expect(validationWearable).toStrictEqual(undefined);
    });

    test('Heart Rate Missing Value-- It should respond with value required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateValueMissing);
        expect(validationWearable).toBe("\"unit\" missing required peer \"value\"");
    });

    test('Heart Rate Value Invalid-- It should respond with boolean required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateValueInvalid);
        expect(validationWearable).toStrictEqual("\"heartRate.value\" must be a number");
    });

    test('Heart Rate Data Low-- It should respond with unit required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateValueLow);
        expect(validationWearable).toBe("\"heartRate.value\" must be greater than or equal to 0");
    });

    test('Heart Rate Data High- It should respond with unit must be Less', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateValueHigh);
        expect(validationWearable).toBe("\"heartRate.value\" must be less than or equal to 300");
    });

        test('Heart Rate missing Unit-- It should respond with unit required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateUnitMissing);
        expect(validationWearable).toBe("\"value\" missing required peer \"unit\"");
    });

    test('Heart Rate Invalid Unit-- It should respond with unit must be Valid', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableHeartRateUnitInvalid);
        expect(validationWearable).toBe("\"heartRate.unit\" must be [bpm]");
    });

    test('Steps Missing Value-- It should respond with value required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableStepsValueMissing);
        expect(validationWearable).toBe("\"unit\" missing required peer \"value\"");
    });

    test('Steps Value Invalid-- It should respond with boolean required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableStepsValueInvalid);
        expect(validationWearable).toStrictEqual("\"steps.value\" must be a number");
    });

    test('Steps Data Low-- It should respond with unit required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableStepsValueLow);
        expect(validationWearable).toBe("\"steps.value\" must be greater than or equal to 0");
    });

        test('Steps missing Unit-- It should respond with unit required', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableStepsUnitMissing);
        expect(validationWearable).toBe("\"value\" missing required peer \"unit\"");
    });

    test('Steps Invalid Unit-- It should respond with unit must be Valid', () => {
        const validationWearable = generalStelSchemaValidation(measurementDataWearableStepsUnitInvalid);
        expect(validationWearable).toBe("\"steps.unit\" must be [null]");
    });
})

const measurementDataWearableCorrect = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
 
               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                "value": 130,
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableHeartRateValueMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
      
               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableHeartRateValueInvalid = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {

               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                "value": "30",
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableHeartRateValueLow = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
  
               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                "value": -30,
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableHeartRateValueHigh = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {

               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                "value": 3000,
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableHeartRateUnitMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {

               "steps": {
                   "value": 1000,
                   "unit": null
               },
               "heartRate": {
                "value": 30,
                
               },
        }
    }
};

const measurementDataWearableHeartRateUnitInvalid = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
  
            "steps": {
                "value": 1000,
                "unit": null
            },
            "heartRate": {
                "value": 30,
                "unit":3
               },
        }
    }
};



const measurementDataWearableStepsValueMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
      
               "steps": {
               
                   "unit": null
               },
               "heartRate": {
                
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableStepsValueInvalid = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {

               "steps": {
                   "value": "1000",
                   "unit": null
               },
               "heartRate": {
                "value": "30",
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableStepsValueLow = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
  
               "steps": {
                   "value": -1000,
                   "unit": null
               },
               "heartRate": {
                "value": -30,
                "unit": "bpm"
               },
        }
    }
};

const measurementDataWearableStepsUnitMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {

               "steps": {
                   "value": 1000,
                   
               },
               "heartRate": {
                "value": 30,
                "unit": "bpm"
                
               },
        }
    }
};

const measurementDataWearableStepsUnitInvalid = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff"
    },
   "measure": {
        "type": "wearable",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
  
            "steps": {
                "value": 1000,
                "unit": "null"
            },
            "heartRate": {
                "value": 30,
                "unit": "bpm"
               },
        }
    }
};
