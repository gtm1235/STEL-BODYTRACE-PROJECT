//const request = require('supertest');
const generalStelSchemaValidation = require('../../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
       test('Temperature correct data-- It should respond with undefined', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureCorrect);
        expect(validationTemperature).toStrictEqual(undefined);
    });

    test('Temperature Missing Value-- It should respond with value required', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureValueMissing);
        expect(validationTemperature).toBe("\"temperature.value\" is required");
    });

    test('Temperature Value Invalid-- It should respond with boolean required', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureValueInvalid);
        expect(validationTemperature).toStrictEqual("\"temperature.value\" must be a number");
    });

    test('Temperature Data Low-- It should respond with unit required', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureValueLow);
        expect(validationTemperature).toBe("\"temperature.value\" must be greater than or equal to 20");
    });

    test('Temperature Data High- It should respond with unit must be Less', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureValueHigh);
        expect(validationTemperature).toBe("\"temperature.value\" must be less than or equal to 50");
    });

        test('Temperature missing Unit-- It should respond with unit required', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureUnitMissing);
        expect(validationTemperature).toBe("\"temperature.unit\" is required");
    });

    test('Temperature Invalid Unit-- It should respond with unit must be Valid', () => {
        const validationTemperature = generalStelSchemaValidation(measurementDataTemperatureUnitInvalid);
        expect(validationTemperature).toBe("\"temperature.unit\" must be [celsius]");
    });
})

const measurementDataTemperatureCorrect = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": 30,
             "unit": "celsius"
            }
        }
    }
};

const measurementDataTemperatureValueMissing = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             
             "unit": "celsius"
            }
        }
    }
};

const measurementDataTemperatureValueInvalid = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": "100",
             "unit": "celsius"
            }
        }
    }
};

const measurementDataTemperatureValueLow = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": -100,
             "unit": "celsius"
            }
        }
    }
};

const measurementDataTemperatureValueHigh = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": 130,
             "unit": "celsius"
            }
        }
    }
};

const measurementDataTemperatureUnitMissing = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": 29,
             
            }
        }
    }
};

const measurementDataTemperatureUnitInvalid = {
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
        "type": "temperature",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
             "temperature": {
             "value": 30,
             "unit": "mg/L"
            }
        }
    }
};
