//const request = require('supertest');
const generalStelSchemaValidation = require('../utils/apiValidation/stelPostValidation');

describe('Test Validation Script', () => {

    test('General correct data-- It should respond with undefined', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataCorrect);
        expect(validationGeneral).toStrictEqual(undefined);
    });

    
    test('General Data ID incorrect Length-- It should respond with 36 characters', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataIdIncorrectLength);
        expect(validationGeneral).toBe("\"id\" length must be 36 characters long");
    });


    test('General Data ID not String', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataIdNotString);
        expect(validationGeneral).toStrictEqual("\"id\" must be a string");
    });
    
    test('General Data ID Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataIdMissing);
        expect(validationGeneral).toBe("\"id\" is required");
    });

    test('General Data Meta:Schema Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataSchemaMissing);
        expect(validationGeneral).toBe("\"meta.schemaVersion\" is required");
    });

    test('General Data Schema Not a String', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataSchemaNotString);
        expect(validationGeneral).toBe("\"meta.schemaVersion\" must be a string");
    });

    test('General Data HubId Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataHubIdMissing);
        expect(validationGeneral).toBe("\"hubId\" is required");
    });

    test('General Data HubId Not String', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataHubIdNotString);
        expect(validationGeneral).toBe("\"hubId\" must be a string");
    });

    test('General Data HubId Not AlphaNumeric', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataHubIdNotAlphaNumeric);
        expect(validationGeneral).toBe("\"hubId\" must only contain alpha-numeric characters");
    });

    test('General Data transmissionTime Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataTransmissionTimeMissing);
        expect(validationGeneral).toBe("\"transmissionTime\" is required");
    });

    test('General Data transmissionTime Not Date', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataTransmissionTimeNotDate);
        expect(validationGeneral).toBe("\"transmissionTime\" must be a valid date");
    });

    test('General Data Device MAC Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataDeviceMacMissing);
        expect(validationGeneral).toBe("\"device.mac\" is required");
    });

    test('General Data Device Mac must be a valid Mac', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMacNotValid);
        expect(validationGeneral).toBe(
            "\"device.mac\" with value \"AB:CD:EF:12:34:E\" fails to match the required pattern: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/");
    });

    test('General Data make Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMakeMissing);
        expect(validationGeneral).toBe("\"device.make\" is required");
    });

    test('General Data Device Make must be a string or null', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMakeNotValid);
        expect(validationGeneral).toBe("\"device.make\" must be one of [string, number, null]");
    });

    test('General Data Device Model Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataModelMissing);
        expect(validationGeneral).toBe("\"device.model\" is required");
    });

    test('General Data Device Model must be a string or null', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataModelNotValid);
        expect(validationGeneral).toBe("\"device.model\" must be one of [string, number, null]");
    });

    test('General Data Measure Type Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMeasureTypeMissing);
        expect(validationGeneral).toBe("\"measure.type\" is required");
    });

    test(`General Data measure type must be a bloodpressure, 
        ekg, glucose, inr, pillcap, pulseox, spirometry, 
        temperature, wearable, weight`, () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMeasureTypeNotValid);
        expect(validationGeneral).toBe(
            `\"measure.type\" must be one of [bloodpressure, ekg, glucose, inr, pillcap, pulseox, spirometry, temperature, wearable, weight]`
        );
    });

    test('General Data Measure Time Missing', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMeasureTimeMissing);
        expect(validationGeneral).toBe("\"measure.time\" is required");
    });

    test('General Data Measure Time Not Date', () => {
        const validationGeneral = generalStelSchemaValidation(generalDataMeasureTimeNotValid);
        expect(validationGeneral).toBe("\"measure.time\" must be a valid date");
    });

})

const generalDataCorrect = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataIdIncorrectLength = {
    "id": "35263822-7b2e-4683-872",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataIdNotString = {
    "id": 5,
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataIdMissing = {
    
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataSchemaMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": undefined
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataSchemaNotString = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": 5
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataHubIdMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataHubIdNotString = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": 5,
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataHubIdNotAlphaNumeric = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "-",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataTransmissionTimeMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataTransmissionTimeNotDate = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataDeviceMacMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMacNotValid = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E",
        "make": null,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMakeMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMakeNotValid = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": true,
        "model": null
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataModelMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataModelNotValid = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": true
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
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMeasureTypeMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
    },
    "measure": {
        
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 100,
                "unit": "%"
            },
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMeasureTypeNotValid = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
    },
    "measure": {
        "type": "notValid",
        "time": "2021-11-29T16:18:10+00:00",
        "data": {
            "spo2": {
                "value": 100,
                "unit": "%"
            },
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMeasureTimeMissing = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
    },
    "measure": {
        "type": "pulseox",
        
        "data": {
            "spo2": {
                "value": 100,
                "unit": "%"
            },
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};

const generalDataMeasureTimeNotValid = {
    "id": "35263822-7b2e-4683-8720-d31ffb1214s9",
    "meta": {
        "schemaVersion": "stel-v2.0"
    },
    "hubId": "ABCDE12345",
    "transmissionTime": "2021-11-29T16:18:10+00:00",
    "device": {
        "mac": "AB:CD:EF:12:34:E2",
        "make": null,
        "model": null
    },
    "measure": {
        "type": "pulseox",
        "time": "",
        "data": {
            "spo2": {
                "value": 100,
                "unit": "%"
            },
            "heartRate": {
                "value": 100,
                "unit": "bpm"
            }
        }
    }
};
