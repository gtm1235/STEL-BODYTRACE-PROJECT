const { optional } = require('joi');
const Joi = require('joi');

/*
JOI Validation script is for JSON INR Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

 "data": {
    Optional["inr"]: {
      "value": 2.4,
      "unit": null
    },
    "pt": {
        "value": 1.327,
        "unit": "secs"  
    },
    Optional["control"]: {
        "value": "high|low",
        "unit": null 
    },
    Optional["status"]: {
        "value": "pass|fail",
        "unit": null
    }
  }
*/

function validateINR(measurementData) {
    const INRSchema = Joi.object({
        "inr": Joi.object({
            "value": Joi.alternatives()
                .try(Joi.number()
                    .strict()
                    .min(0)
                    .max(100)),

            "unit": Joi.valid(null)
        }).optional().with('value', 'unit')
            .with('unit', 'value'),

        "pt": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(100)
                .required(),

            "unit": Joi.string()
                .strict()
                .valid("secs")
                .required()
        },

        "control": Joi.object({
            "value": Joi.valid("high", "low"),
            "unit": Joi.valid(null)
        }).optional().with('value', 'unit')
            .with('unit', 'value'),

        "status": Joi.object({
            "value": Joi.valid("pass", "fail"),
            "unit": Joi.valid(null)
        }).optional().with('value', 'unit')
            .with('unit', 'value'),

    })
    const { error, value } = INRSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

module.exports = validateINR;