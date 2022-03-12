const Joi = require('joi');

function validateBp(measurementData) {
    const bpSchema = Joi.object({
        "heartRate": {
            "value": Joi.number()
                .min(0)
                .max(300)
                .required(),

            "unit": Joi.string()
                .valid("bpm")
                .required()
        },

        "systolic": {
            "value": Joi.number()
                .min(40)
                .max(300)
                .required(),

            "unit": Joi.string()
                .valid("mmHg")
                .required()
        },

        "diastolic": {
            "value": Joi.number()
                .min(0)
                .max(200)
                .required(),

            "unit": Joi.string()
                .valid("mmHg")
                .required()
        },

        "irregularPulse": {
            "value": Joi.boolean(),
            "unit": Joi.valid(null)
        }

    })
    const { error, value } = bpSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

module.exports = validateBp;