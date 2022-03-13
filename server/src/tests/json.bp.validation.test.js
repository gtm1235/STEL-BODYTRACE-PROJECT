//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stelPostValidation');


describe('Test Validation Script', () => {



    test('BP correct data-- It should respond with undefined', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBP);
        expect(validationBP).toStrictEqual(undefined);
    });

    test('BP Heart Rate no value-- It should respond with is required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPHeartRateNoValue);
        expect(validationBP).toBe("\"heartRate.value\" is required");
    });

    test('BP Heart Rate High value-- It should respond with less than 300', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPHeartRateHigh);
        expect(validationBP).toBe("\"heartRate.value\" must be less than or equal to 300");
    });

    test('BP Heart Rate low value-- It should respond with greater than 0', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPHeartRateLow);
        expect(validationBP).toBe("\"heartRate.value\" must be greater than or equal to 0");
    });

    test('BP Heart Rate Units missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPHeartRateUnitsMissing);
        expect(validationBP).toBe("\"heartRate.unit\" is required");
    });

    test('BP Heart Rate Units incorrect-- It should respond with should = bpm', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPHeartRateUnitsIncorrect);
        expect(validationBP).toBe("\"heartRate.unit\" must be [bpm]");
    });

    test('BP Systolic Value missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataSystolicMissing);
        expect(validationBP).toBe("\"systolic.value\" is required");
    });

    test('BP Systolic low value-- It should respond with greater than 40', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPSystolicLow);
        expect(validationBP).toBe("\"systolic.value\" must be greater than or equal to 40");
    });

    test('BP Systolic high value-- It should respond with less than 300', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPSystolicHigh);
        expect(validationBP).toBe("\"systolic.value\" must be less than or equal to 300");
    });

    test('BP Diastolic Value missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataDiastolicMissing);
        expect(validationBP).toBe("\"diastolic.value\" is required");
    });

    test('BP Diastolic low value-- It should respond with greater than 0', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPDiastolicLow);
        expect(validationBP).toBe("\"diastolic.value\" must be greater than or equal to 0");
    });

    test('BP Diastolic high value-- It should respond with less than 200', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPDiastolicHigh);
        expect(validationBP).toBe("\"diastolic.value\" must be less than or equal to 200");
    });

    test('BP Irregular Pulse [Optional}-- It should respond with greater than undefined', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPIrregularPulseOptional);
        expect(validationBP).toStrictEqual(undefined);
    });

    test('BP Irregular Pulse Value Invalid-- It should respond with must be Boolean', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPIrregularPulseValueInvalid);
        expect(validationBP).toBe("\"irregularPulse.value\" must be a boolean");
    });

    test('BP Irregular Pulse Unit Invalid-- It should respond with must be null', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPIrregularPulseUnitInvalid);
        expect(validationBP).toBe("\"irregularPulse.unit\" must be [null]");
    });

    test('BP Irregular Pulse Missing-- It should respond with required', () => {
        const validationBP = generalStelSchemaValidation(measurementDataBPIrregularPulseUnitMissing);
        expect(validationBP).toBe(undefined);
    });

});

const measurementDataBP =
{
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 180,
                "unit": "bpm"
            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};

const measurementDataBPHeartRateNoValue = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {

                "unit": "bpm"
            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};

const measurementDataBPHeartRateHigh =
{
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 4000,
                "unit": "bpm"
            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};

const measurementDataBPHeartRateLow =
{
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": -100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};


const measurementDataBPHeartRateUnitsMissing = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,

            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataBPHeartRateUnitsIncorrect = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bp"
            },
            "systolic": {
                "value": 128,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataSystolicMissing = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {

                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataBPSystolicLow = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": -100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataBPSystolicHigh = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 400,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 72,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};

const measurementDataDiastolicMissing = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 120,
                "unit": "mmHg"
            },
            "diastolic": {

                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataBPDiastolicLow = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": -100,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};;

const measurementDataBPDiastolicHigh = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 300,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};

const measurementDataBPIrregularPulseOptional = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 120,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 100,
                "unit": "mmHg"
            },

        }
    }
};;

const measurementDataBPIrregularPulseValueInvalid = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": 1,
                "unit": null
            }

        }
    }
};;

const measurementDataBPIrregularPulseUnitInvalid = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "irregularPulse": {
                "value": true,
                "unit": 1,
            }
        }
    }
};

const measurementDataBPIrregularPulseUnitMissing = {
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
        "type": "bloodpressure",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            },
            "systolic": {
                "value": 100,
                "unit": "mmHg"
            },
            "diastolic": {
                "value": 100,
                "unit": "mmHg"
            },

        }
    }

};