const Joi = require('joi');

function validateSpO2(measurementData) {
    const SpO2Schema = Joi.object({
        "spo2": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(100)
                .required(),

            "unit": Joi.string()
                .valid("%")
                .required()
        },

        "heartRate": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(300)
                .required(),

            "unit": Joi.string()
                .strict()
                .valid("bpm")
                .required()
        },
    })
    const { error, value } = SpO2Schema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

const measurementData = {
    "spo2": {
        "value": 96,
        "unit": "%"
    },
    "heartRate": {
        "value": 87,
        "unit": "bpm"
    }
};

// const result = validateSpO2(measurementData);
// console.log(result);


module.exports = validateSpO2;