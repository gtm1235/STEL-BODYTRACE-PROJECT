//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {
       test('EKG correct data-- It should respond with undefined', () => {
        const validationEKG = generalStelSchemaValidation(measurementDataEKGCorrect);
        expect(validationEKG).toStrictEqual(undefined);
    });

    test('EKG missing Irregular Pulse Value-- It should respond with value required', () => {
        const validationEKG = generalStelSchemaValidation(measurementDataEKGIrregularPulseValueMissing);
        expect(validationEKG).toBe("\"irregularPulse.value\" is required");
    });

    test('EKG Incorrect Pulse Data-- It should respond with boolean required', () => {
        const validationEKG = generalStelSchemaValidation(measurementDataEKGIrregularPulseValueBoolean);
        expect(validationEKG).toStrictEqual("\"irregularPulse.value\" must be a boolean");
    });

    test('EKG missing Irregular Pulse Unit-- It should respond with unit required', () => {
        const validationEKG = generalStelSchemaValidation(measurementDataEKGIrregularPulseUnitMissing);
        expect(validationEKG).toBe("\"irregularPulse.unit\" is required");
    });

    test('EKG correct data-- It should respond with unit must be null', () => {
        const validationEKG = generalStelSchemaValidation(measurementDataEKGIrregularPulseUnitIncorrect);
        expect(validationEKG).toBe("\"irregularPulse.unit\" must be [null]");
    });
})

const measurementDataEKGCorrect =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
};
const measurementDataEKGIrregularPulseValueMissing =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                
                "unit": null
            }
        }
    }
};

const measurementDataEKGIrregularPulseValueBoolean =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                "value": 1,
                "unit": null
            }
        }
    }
};

const measurementDataEKGIrregularPulseUnitMissing =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                "value": true,
                
            }
        }
    }
};

const measurementDataEKGIrregularPulseUnitIncorrect =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                "value": true,
                "unit": 1
            }
        }
    }
};

const measurementDataEKG =
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
        "type": "ekg",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "irregularPulse": {
                "value": true,
                "unit": null
            }
        }
    }
}