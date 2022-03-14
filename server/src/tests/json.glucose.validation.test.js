//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
       test('Glucose correct data-- It should respond with undefined', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseCorrect);
        expect(validationGlucose).toStrictEqual(undefined);
    });

    test('Glucose Missing Value-- It should respond with value required', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseValueMissing);
        expect(validationGlucose).toBe("\"glucose.value\" is required");
    });

    test('Glucose Value Invalid-- It should respond with boolean required', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseValueInvalid);
        expect(validationGlucose).toStrictEqual("\"glucose.value\" must be a number");
    });

    test('Glucose Data Low-- It should respond with unit required', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseValueLow);
        expect(validationGlucose).toBe("\"glucose.value\" must be greater than or equal to 0");
    });

    test('Glucose Data High- It should respond with unit must be Less', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseValueHigh);
        expect(validationGlucose).toBe("\"glucose.value\" must be less than or equal to 1000");
    });

        test('Glucose missing Unit-- It should respond with unit required', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseUnitMissing);
        expect(validationGlucose).toBe("\"glucose.unit\" is required");
    });

    test('Glucose Invalid Unit-- It should respond with unit must be Valid', () => {
        const validationGlucose = generalStelSchemaValidation(measurementDataGlucoseUnitInvalid);
        expect(validationGlucose).toBe("\"glucose.unit\" must be [mg/dL]");
    });
})

const measurementDataGlucoseCorrect = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": 100,
             "unit": "mg/dL"
            }
        }
    }
};

const measurementDataGlucoseValueMissing = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             
             "unit": "mg/dL"
            }
        }
    }
};

const measurementDataGlucoseValueInvalid = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": "100",
             "unit": "mg/dL"
            }
        }
    }
};

const measurementDataGlucoseValueLow = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": -100,
             "unit": "mg/dL"
            }
        }
    }
};

const measurementDataGlucoseValueHigh = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": 10000,
             "unit": "mg/dL"
            }
        }
    }
};

const measurementDataGlucoseUnitMissing = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": 100,
             
            }
        }
    }
};

const measurementDataGlucoseUnitInvalid = {
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
        "type": "glucose",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "glucose": {
             "value": 100,
             "unit": "mg/L"
            }
        }
    }
};
