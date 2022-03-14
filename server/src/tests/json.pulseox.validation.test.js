//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
    test('SpO2 correct data-- It should respond with undefined (correct)', () => {
        const validationSpO2 = generalStelSchemaValidation(measurementDataSpO2Correct);
        expect(validationSpO2).toStrictEqual(undefined);
    });

    test('SpO2 Heart Rate no value-- It should respond with is required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2HeartRateMissing);
        expect(validationBP).toBe("\"heartRate.value\" is required");
    });

    test('SpO2 Heart Rate High value-- It should respond with less than 300', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2HeartRateHigh);
        expect(validationBP).toBe("\"heartRate.value\" must be less than or equal to 300");
    });

    test('SpO2 Heart Rate low value-- It should respond with greater than 0', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2HeartRateLow);
        expect(validationBP).toBe("\"heartRate.value\" must be greater than or equal to 0");
    });

    test('SpO2 Heart Rate Units missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2HeartRateUnitsMissing);
        expect(validationBP).toBe( "\"heartRate.unit\" is required");
    });

    test('SpO2 Heart Rate Units incorrect-- It should respond with should = bpm', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2HeartRateUnitsIncorrect);
        expect(validationBP).toBe("\"heartRate.unit\" must be [bpm]");
    });

    test('SpO2 High value-- It should respond with less than 101', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2High);
        expect(validationBP).toBe("\"spo2.value\" must be less than or equal to 100");
    });

    test('SpO2 Heart Rate low value-- It should respond with greater than 0', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2Low);
        expect(validationBP).toBe("\"spo2.value\" must be greater than or equal to 0");
    });

    test('SpO2 value missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2ValueMissing);
        expect(validationBP).toBe( "\"spo2.value\" is required");
    });

    test('SpO2 Value incorrect-- It should respond with should be number', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2ValueIncorrect);
        expect(validationBP).toBe("\"spo2.value\" must be a number");
    });

    test('SpO2  Units missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2UnitsMissing);
        expect(validationBP).toBe( "\"spo2.unit\" is required");
    });

    test('SpO2 Units incorrect-- It should respond with should = %', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSpO2UnitsIncorrect);
        expect(validationBP).toBe("\"spo2.unit\" must be [%]");
    });
});

const measurementDataSpO2Correct = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 100,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};


const measurementDataSpO2HeartRateMissing = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "%"
            },
            "heartRate": {
               
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2HeartRateHigh = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "%"
            },
            "heartRate": {
                "value": 487,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2HeartRateLow = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "%"
            },
            "heartRate": {
                "value": -87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2HeartRateUnitsMissing = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
               
            }
        }
    }
};

const measurementDataSpO2HeartRateUnitsIncorrect = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": 1
            }
        }
    }
};

const measurementDataSpO2High = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 101,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2Low = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": -96,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2ValueMissing = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
               
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2ValueIncorrect = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": null,
                "unit": "%"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2UnitsMissing = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

const measurementDataSpO2UnitsIncorrect = {
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
        "type": "pulseox",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 96,
                "unit": "5"
            },
            "heartRate": {
                "value": 87,
                "unit": "bpm"
            }
        }
    }
};

