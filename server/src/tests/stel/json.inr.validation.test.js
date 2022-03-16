const request = require('supertest');
const generalStelSchemaValidation = require('../../utils/apiValidation/stel/stelPostValidation');


describe('Test Validation Script', () => {

    test('INR correct data-- It should respond with undefined', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINR);
        expect(validationINR).toStrictEqual(undefined);
    });

    test('INR no value-- It should respond with is required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRMissing);
        expect(validationINR).toBe("\"unit\" missing required peer \"value\"");
    });

    test('INR High value-- It should respond with less than 100', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRHigh);
        expect(validationINR).toBe("\"inr.value\" must be less than or equal to 100");
    });

    test('INR low value-- It should respond with greater than 0', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRLow);
        expect(validationINR).toBe("\"inr.value\" must be greater than or equal to 0");
    });

    test('INR Value Invalid-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRInvalid);
        expect(validationINR).toBe("\"inr.value\" must be a number");
    });

    test('INR Units missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRUnitsMissing);
        expect(validationINR).toBe("\"value\" missing required peer \"unit\"");
    });

    test('INR Units incorrect-- It should respond with should = INRm', () => {
        const validationINR = generalStelSchemaValidation(measurementDataINRUnitsIncorrect);
        expect(validationINR).toBe("\"inr.unit\" must be [null]");
    });

    test('PT Value missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtValueMissing);
        expect(validationINR).toBe("\"pt.value\" is required");
    });

    test('PT low value-- It should respond with greater than 0', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtValueLow);
        expect(validationINR).toBe("\"pt.value\" must be greater than or equal to 0");
    });

    test('PT high value-- It should respond with greater than 0', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtValueHigh);
        expect(validationINR).toBe("\"pt.value\" must be less than or equal to 100");
    });

    test('PT value Invalid-- It should respond with number', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtValueInvalid);
        expect(validationINR).toBe("\"pt.value\" must be a number");
    });

    test('PT Unit missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtUnitMissing);
        expect(validationINR).toBe("\"pt.unit\" is required");
    });

    test('PT Unit Invalid-- It should respond with "secs" required]', () => {
        const validationINR = generalStelSchemaValidation(measurementDataPtUnitInvalid);
        expect(validationINR).toBe( "\"pt.unit\" must be [secs]");
    });

    test('INR Control Value missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataControlValueMissing);
        expect(validationINR).toBe("\"unit\" missing required peer \"value\"");
    });

    test('INR Control value Invalid-- It should respond with High | Low', () => {
        const validationINR = generalStelSchemaValidation(measurementDataControlValueInvalid);
        expect(validationINR).toBe("\"control.value\" must be one of [high, low]");
    });

    test('INR Control Unit missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataControlUnitMissing);
        expect(validationINR).toBe("\"value\" missing required peer \"unit\"");
    });

    test('INR Control Unit Invalid-- It should respond with null required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataControlUnitInvalid);
        expect(validationINR).toBe("\"control.unit\" must be [null]");
    });

    test('INR Status Value missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataStatusValueMissing);
        expect(validationINR).toBe("\"unit\" missing required peer \"value\"");
    });

    test('INR Status value Invalid-- It should respond with pass |fail', () => {
        const validationINR = generalStelSchemaValidation(measurementDataStatusValueInvalid);
        expect(validationINR).toBe("\"status.value\" must be one of [pass, fail]");
    });

    test('INR Status Unit missing-- It should respond with required', () => {
        const validationINR = generalStelSchemaValidation(measurementDataStatusUnitMissing);
        expect(validationINR).toBe("\"value\" missing required peer \"unit\"");
    });

    test('INR Status Unit Invalid-- It should respond with null required]', () => {
        const validationINR = generalStelSchemaValidation(measurementDataStatusUnitInvalid);
        expect(validationINR).toBe("\"status.unit\" must be [null]");
    });

});

const measurementDataINR = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};



const measurementDataINRMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
              
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataINRHigh = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1000,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataINRLow = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": -1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataINRInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": "",
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataINRUnitsMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
               
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataINRUnitsIncorrect = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": "null"
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtValueMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtValueLow = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": -1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtValueHigh = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtValueInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": null,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtUnitMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
              
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataPtUnitInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "ses"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataControlValueMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
               
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataControlValueInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "hh",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataControlUnitMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
              
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataControlUnitInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": ""
            },
            "status": {
                "value": "pass",
                "unit": null
            }
        }
    }
};

const measurementDataStatusValueMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
              
                "unit": null
            }
        }
    }
};

const measurementDataStatusValueInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "ss",
                "unit": null
            }
        }
    }
};

const measurementDataStatusUnitMissing = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
               
            }
        }
    }
};

const measurementDataStatusUnitInvalid = {
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
        "type": "inr",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "inr": {
                "value": 1,
                "unit": null
            },
            "pt": {
                "value": 1.327,
                "unit": "secs"
            },
            "control": {
                "value": "high",
                "unit": null
            },
            "status": {
                "value": "pass",
                "unit": "null"
            }
        }
    }
};
