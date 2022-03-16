//const request = require('supertest');
const generalStelSchemaValidation = require('../../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
       test('Weight correct data-- It should respond with undefined', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightCorrect);
        expect(validationWeight).toStrictEqual(undefined);
    });

    test('Weight Missing Value-- It should respond with value required', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightValueMissing);
        expect(validationWeight).toBe("\"weight.value\" is required");
    });

    test('Weight Value Invalid-- It should respond with boolean required', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightValueInvalid);
        expect(validationWeight).toStrictEqual("\"weight.value\" must be a number");
    });

    test('Weight Data Low-- It should respond with unit required', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightValueLow);
        expect(validationWeight).toBe("\"weight.value\" must be greater than or equal to 0");
    });

    test('Weight Data High- It should respond with unit must be Less', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightValueHigh);
        expect(validationWeight).toBe("\"weight.value\" must be less than or equal to 1000");
    });

        test('Weight missing Unit-- It should respond with unit required', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightUnitMissing);
        expect(validationWeight).toBe("\"weight.unit\" is required");
    });

    test('Weight Invalid Unit-- It should respond with unit must be Valid', () => {
        const validationWeight = generalStelSchemaValidation(measurementDataWeightUnitInvalid);
        expect(validationWeight).toBe("\"weight.unit\" must be [lbs]");
    });
})

const measurementDataWeightCorrect = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": 30,
             "unit": "lbs"
            }
        }
    }
};

const measurementDataWeightValueMissing = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             
             "unit": "lbs"
            }
        }
    }
};

const measurementDataWeightValueInvalid = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": "100",
             "unit": "lbs"
            }
        }
    }
};

const measurementDataWeightValueLow = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": -100,
             "unit": "lbs"
            }
        }
    }
};

const measurementDataWeightValueHigh = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": 1300,
             "unit": "lbs"
            }
        }
    }
};

const measurementDataWeightUnitMissing = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": 29,
             
            }
        }
    }
};

const measurementDataWeightUnitInvalid = {
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
        "type": "weight",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "weight": {
             "value": 30,
             "unit": "mg/L"
            }
        }
    }
};
