const request = require('supertest');
const app = require('../app');

/*
Testing GET requests -- Basic testing Response codes and basic API Functionality.  Validation is done extensively
with in validation.js testing modules
*/

describe('Test GET /stel data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/bp', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/bp')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/ekg data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/ekg')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/spo2 data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/spo2')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/glucose data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/glucose')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/inr data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/inr')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});


/*
POST TESTING VALID BELOW -- Note that extensive validation is done with in validation.test.js
files.  This is testing status codes and API general function
*/

describe('Test POST stel', () => {
    const bloodPressureData = {
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
                    "value": 200,
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

    const ekgData = {
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

    const spo2Data = {
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

    const glucoseData = {
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
                    "value": 111,
                    "unit": "mg/dL"
                }
            }
        }
    };

    const inrData = {
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


    test('POST BP -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(bloodPressureData)
            .expect('Content-Type', /json/)
            .expect(201);

        expect(response.body).toStrictEqual({
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
                        "value": 200,
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
        })
    });

    test('POST EKG -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(ekgData)
            .expect('Content-Type', /json/)
            .expect(201);

        expect(response.body).toStrictEqual({
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
        })
    });

    test('POST glucose -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(glucoseData)
            .expect('Content-Type', /json/)
            .expect(201);

        expect(response.body).toStrictEqual({
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
                        "value": 111,
                        "unit": "mg/dL"
                    }
                }
            }
        });
    });

    test('POST inr -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(inrData)
            .expect('Content-Type', /json/)
            .expect(201);

        expect(response.body).toStrictEqual({
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
        });
    });
});


/*
Testing Invalid Post requests.  Only testing response codes and basic API functionality. 
Extensive testing in validation.js files can be found
*/
describe('Test POST stel Bad Data', () => {
    const bloodPressureDataHighBP = {
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
                    "value": 2000,
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

    const ekgDataNoTransmissionTime = {
        "id": "35263822-7b2e-4683-8720-d31ffb12149b",
        "meta": {
            "schemaVersion": "stel-v2.0"
        },
        "hubId": "ABCDE12345",

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

    const spo2DataBadMac = {
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

    const glucoseDataHigh = {
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
                    "value": 11111,
                    "unit": "mg/dL"
                }
            }
        }
    };

    const inrDataMissing = {
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

    test('POST Bad BP -- It should respond with test code 400 High BP', async () => {
        const response = await request(app)
            .post('/stel')
            .send(bloodPressureDataHighBP)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"systolic.value\" must be less than or equal to 300"
        })
    });

    test('POST Bad EKG -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(ekgDataNoTransmissionTime)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"transmissionTime\" is required"
        })
    });

    test('POST Bad SpO2 -- It should respond with test code 400 and Bad MAC success', async () => {
        const response = await request(app)
            .post('/stel')
            .send(spo2DataBadMac)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"device.mac\" with value \"AB:CD:EF:12:34:E\" fails to match the required pattern: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/"
        });
    });

    test('POST Bad glucose -- It should respond with test code 400 and Value should bve less', async () => {
        const response = await request(app)
            .post('/stel')
            .send(glucoseDataHigh)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"glucose.value\" must be less than or equal to 1000"
        });
    });

    test('POST Bad INR -- It should respond with test code 400 and Value should bve less', async () => {
        const response = await request(app)
            .post('/stel')
            .send(inrDataMissing)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"unit\" missing required peer \"value\""
        });
    });
});