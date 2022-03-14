const Joi = require('joi');

/*
JOI Validation script is for JSON Blood Pressure Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

"data": {
    "heartRate": {
      "value": 120,
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
    Optional["irregularPulse"]: {
      "value": true|false,
      "unit": null
    }
  }
*/

function validateBp(measurementData) {
    const bpSchema = Joi.object({
        "heartRate": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(300)
                .required(),

            "unit": Joi.string()
                .valid("bpm")
                .required()
        },

        "systolic": {
            "value": Joi.number()
                .strict()
                .min(40)
                .max(300)
                .required(),

            "unit": Joi.string()
                .strict()
                .valid("mmHg")
                .required()
        },

        "diastolic": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(200)
                .required(),

            "unit": Joi.string()
                .valid("mmHg")
                .required()
        },

        "irregularPulse": Joi.object({
            "value": Joi.alternatives().try(Joi.boolean().strict()),
            "unit": Joi.valid(null)
        }).optional()

    })
    const { error, value } = bpSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

module.exports = validateBp;