//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stelPostValidation');


describe('Test Validation Script', () => {
       test('Pill Cap correct data-- It should respond with undefined', () => {
        const validationPillCap = generalStelSchemaValidation(measurementDataPillCapCorrect);
        expect(validationPillCap).toStrictEqual(undefined);
    });

    test('PillCap Missing Value-- It should respond with value required', () => {
        const validationPillCap = generalStelSchemaValidation(measurementDataPillCapDataMissing);
        expect(validationPillCap).toBe("\"measure.data\" is required");
    });

    test('PillCap Data Invalid-- It should respond with must be object', () => {
        const validationPillCap = generalStelSchemaValidation(measurementDataPillCapDataInvalid);
        expect(validationPillCap).toBe("\"measure.data\" must be of type object");
    });

    test('PillCap Data Object Missing-- It should respond with must be object', () => {
        const validationPillCap = generalStelSchemaValidation(measurementDataPillCapDataObjectMissing);
        expect(validationPillCap).toBe("\"measure.data\" is required");
    });
})

const measurementDataPillCapCorrect = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0",
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff",
    },
    "measure": {
        "type": "pillcap",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {},
    }
};

const measurementDataPillCapDataMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0",
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff",
    },
    "measure": {
        "type": "pillcap",
        "time": "2021-11-29T16:18:10+00:00",
    }
};

const measurementDataPillCapDataInvalid = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0",
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff",
    },
    "measure": {
        "type": "pillcap",
        "time": "2021-11-29T16:18:10+00:00",
        "data": "",
    }
};

const measurementDataPillCapDataObjectMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb12149b",
    "meta": {
        "schemaVersion": "stel-v2.0",
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:5E",
        "make": null,
        "model": "BP Cuff",
    },
    "measure": {
        "type": "pillcap",
        "time": "2021-11-29T16:18:10+00:00",
    
    }
};