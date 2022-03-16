const request = require('supertest');
const app = require('../../app');

const headerKey = "Authorization";
const headerValue = "Bearer 1234";

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

describe('Test GET /stel/pillcap data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/pillcap')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/spirometry data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/spirometry')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/temperature data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/temperature')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/wearable data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/wearable')
            .expect('Content-Type', /json/)
            .expect(200);
        //expect(response.statusCode).toBe(200);
    });
});

describe('Test GET /stel/weight data', () => {
    test('It should respond with a 200 success', async () => {
        const response = await request(app)
            .get('/stel/weights')
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
    const headerKey = "Authorization";
    const headerValue = "Bearer 1234";

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

    const pillCapData = {
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
            "type": "pillcap",
            "time": "2021-11-29T16:18:10+00:00",
            "data": {}
        }
    };

    const spirometryData = {
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

    const temperatureData = {
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
                    "unit": "celsius",
                    "value": 36.32
                }
            }
        }
    };

    const wearableData = {
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
            "type": "wearable",
            "time": "2021-11-29T16:18:10+00:00",
            "data": {
                "steps": {
                    "value": 5000,
                    "unit": null
                },
                "heartRate": {
                    "value": 87,
                    "unit": "bpm"
                }
            }
        }
    };

    const weightData = {
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
                    "value": 185,
                    "unit": "lbs"
                }
            }
        }
    }



    test('POST BP -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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

    test('POST pillcap -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(pillCapData)
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
                "type": "pillcap",
                "time": "2021-11-29T16:18:10+00:00",
                "data": {}
            }
        });
    });

    test('POST spirometry -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(spirometryData)
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
        });
    });

    test('POST temperature -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(temperatureData)
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
                "type": "temperature",
                "time": "2021-11-29T16:18:10+00:00",
                "data": {
                    "temperature": {
                        "unit": "celsius",
                        "value": 36.32
                    }
                }
            }
        });
    });

    test('POST wearable -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(wearableData)
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
                "type": "wearable",
                "time": "2021-11-29T16:18:10+00:00",
                "data": {
                    "steps": {
                        "value": 5000,
                        "unit": null
                    },
                    "heartRate": {
                        "value": 87,
                        "unit": "bpm"
                    }
                }
            }
        });
    });

    test('POST weight -- It should respond with test code 201 success', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(weightData)
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
                "type": "weight",
                "time": "2021-11-29T16:18:10+00:00",
                "data": {
                    "weight": {
                        "value": 185,
                        "unit": "lbs"
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

    const pillCapDataMissing = {
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
            "type": "pillcap",
            "time": "2021-11-29T16:18:10+00:00",
        }
    };

    const spirometryDataFvcHigh = {
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
                    "value": 877,
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

    const temperatureDataHigh = {
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
                    "unit": "celsius",
                    "value": 136.32
                }
            }
        }
    };

    const wearableDataHeartRateHigh = {
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
            "type": "wearable",
            "time": "2021-11-29T16:18:10+00:00",
            "data": {
                "steps": {
                    "value": 5000,
                    "unit": null
                },
                "heartRate": {
                    "value": 587,
                    "unit": "bpm"
                }
            }
        }
    };

    const weightDataHigh = {
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
                    "value": 1185,
                    "unit": "lbs"
                }
            }
        }
    }


    test('POST Bad BP -- It should respond with test code 400 High BP', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
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
            .set(headerKey, headerValue)
            .send(inrDataMissing)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"unit\" missing required peer \"value\""
        });
    });

    test('POST Pill Cap Object Missing -- It should respond with test code 400 and Object required', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(pillCapDataMissing)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"measure.data\" is required"
        });
    });

    test('POST Spirometry Fvc Object High -- It should respond with test code 400 and Object required', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(spirometryDataFvcHigh)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"fvc.value\" must be less than or equal to 10",
        });
    });

    test('POST Temperature Object-- It should respond with test code 400 and Object required', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(temperatureDataHigh)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"temperature.value\" must be less than or equal to 50",
        });
    });

    test('POST Wearable Heart Rate High -- It should respond with test code 400 and Object required', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(wearableDataHeartRateHigh)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"heartRate.value\" must be less than or equal to 300",
        });
    });

    test('POST Weight High -- It should respond with test code 400 and Object required', async () => {
        const response = await request(app)
            .post('/stel')
            .set(headerKey, headerValue)
            .send(weightDataHigh)
            .expect('Content-Type', /json/)
            .expect(400);

        expect(response.body).toStrictEqual({
            "result": "\"weight.value\" must be less than or equal to 1000",
        });
    });
});