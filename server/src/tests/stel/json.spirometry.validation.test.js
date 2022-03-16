const request = require('supertest');
const generalStelSchemaValidation = require('../../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {

    test('fvc correct data-- It should respond with undefined', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcCorrect);
        expect(validationSpirometry).toStrictEqual(undefined);
    });

    test('fvc no value-- It should respond with is required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcMissing);
        expect(validationSpirometry).toBe("\"unit\" missing required peer \"value\"");
    });

    test('fvc High value-- It should respond with less than 100', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcHigh);
        expect(validationSpirometry).toBe("\"fvc.value\" must be less than or equal to 10");
    });

    test('fvc low value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcLow);
        expect(validationSpirometry).toBe("\"fvc.value\" must be greater than or equal to 0");
    });

    test('fvc Value Invalid-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcInvalid);
        expect(validationSpirometry).toBe("\"fvc.value\" must be a number");
    });

    test('fvc Units missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcUnitsMissing);
        expect(validationSpirometry).toBe("\"value\" missing required peer \"unit\"");
    });

    test('fvc Units incorrect-- It should respond with should = liters', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFvcUnitsIncorrect);
        expect(validationSpirometry).toBe("\"fvc.unit\" must be [liters]");
    });

    test('fev1 Value missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1ValueMissing);
        expect(validationSpirometry).toBe("\"fev1.value\" is required");
    });

    test('fev1 low value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1ValueLow);
        expect(validationSpirometry).toBe("\"fev1.value\" must be greater than or equal to 0");
    });

    test('fev1 high value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1ValueHigh);
        expect(validationSpirometry).toBe("\"fev1.value\" must be less than or equal to 10");
    });

    test('fev1 value Invalid-- It should respond with number', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1ValueInvalid);
        expect(validationSpirometry).toBe("\"fev1.value\" must be a number");
    });

    test('fev1 Unit missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1UnitMissing);
        expect(validationSpirometry).toBe("\"fev1.unit\" is required");
    });

    test('fev1 Unit Invalid-- It should respond with "secs" required]', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1UnitInvalid);
        expect(validationSpirometry).toBe( "\"fev1.unit\" must be [liters]");
    });

    test('pef Value missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefValueMissing);
        expect(validationSpirometry).toBe("\"pef.value\" is required");
    });

    test('pef High value-- It should respond with less than 100', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefHigh);
        expect(validationSpirometry).toBe("\"pef.value\" must be less than or equal to 2000");
    });

    test('fev6 low value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefLow);
        expect(validationSpirometry).toBe("\"pef.value\" must be greater than or equal to 0");
    });

    test('pef value Invalid-- It should respond with number', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefValueInvalid);
        expect(validationSpirometry).toBe("\"pef.value\" must be a number");
    });

    test('pef Unit missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefUnitMissing);
        expect(validationSpirometry).toBe("\"pef.unit\" is required");
    });

    test('pef Unit Invalid-- It should respond with null required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataPefUnitInvalid);
        expect(validationSpirometry).toBe("\"pef.unit\" must be [L/min]");
    });

    test('fev6 Value missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6ValueMissing);
        expect(validationSpirometry).toBe("\"fev6.value\" is required");
    });

    test('fev6 High value-- It should respond with less than 100', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6High);
        expect(validationSpirometry).toBe("\"fev6.value\" must be less than or equal to 200");
    });

    test('fev6 low value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6Low);
        expect(validationSpirometry).toBe("\"fev6.value\" must be greater than or equal to 0");
    });

    test('fev6 value Invalid-- It should respond with number', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6ValueInvalid);
        expect(validationSpirometry).toBe("\"fev6.value\" must be a number");
    });

    test('fev6 Unit missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6UnitMissing);
        expect(validationSpirometry).toBe("\"fev6.unit\" is required");
    });

    test('fev6 Unit Invalid-- It should respond with null required]', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev6UnitInvalid);
        expect(validationSpirometry).toBe("\"fev6.unit\" must be [liters]");
    });

    test('fev1fev6 no value-- It should respond with is required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6Missing);
        expect(validationSpirometry).toBe("\"unit\" missing required peer \"value\"");
    });

    test('fev1fev6 High value-- It should respond with less than 100', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6High);
        expect(validationSpirometry).toBe("\"fev1fev6.value\" must be less than or equal to 10");
    });

    test('fev1fev6 low value-- It should respond with greater than 0', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6Low);
        expect(validationSpirometry).toBe("\"fev1fev6.value\" must be greater than or equal to 0");
    });

    test('fev1fev6 Value Invalid-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6Invalid);
        expect(validationSpirometry).toBe("\"fev1fev6.value\" must be a number");
    });

    test('fev1fev6 Units missing-- It should respond with required', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6UnitsMissing);
        expect(validationSpirometry).toBe("\"value\" missing required peer \"unit\"");
    });

    test('fev1fev6 Units incorrect-- It should respond with should = fev1fev6m', () => {
        const validationSpirometry = generalStelSchemaValidation(measurementDataFev1fev6UnitsIncorrect);
        expect(validationSpirometry).toBe("\"fev1fev6.unit\" must be [null]");
    });
});


const measurementDataFvcCorrect = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcHigh = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 11,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcLow = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": -0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": "0.877",
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcUnitsIncorrect = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liter"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFvcUnitsMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
               
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1ValueMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
           
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1ValueLow = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": -1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1ValueHigh = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 10.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1ValueInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 1,
                "unit": "liters"
            },
            "fev1": {
                "value": "d",
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1UnitMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
             
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1UnitInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": 1
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefValueMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
               
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefHigh = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 5500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefLow = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": -500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefValueInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": "500",
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefUnitMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
              
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataPefUnitInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/mi"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6ValueMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
           
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6Low = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": -58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6High = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 258,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6ValueInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": "58",
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6UnitMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
              
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev6UnitInvalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "lites"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1fev6Missing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
          
                "unit": null
            }
        }
    }
};


const measurementDataFev1fev6High = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 78,
                "unit": null
            }
        }
    }
};      

const measurementDataFev1fev6Low = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": -0.78,
                "unit": null
            }
        }
    }
};

const measurementDataFev1fev6Invalid = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": "0.78",
                "unit": null
            }
        }
    }
};

const measurementDataFev1fev6UnitsMissing = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
         
            }
        }
    }
};

const measurementDataFev1fev6UnitsIncorrect = {
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
        "type": "spirometry",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "fvc": {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            "pef": {
                "value": 500,
                "unit": "L/min"
            },
            "fev6": {
                "value": 58,
                "unit": "liters"
            },
            "fev1fev6": {
                "value": 0.78,
                "unit": "null"
            }
        }
    }
};
