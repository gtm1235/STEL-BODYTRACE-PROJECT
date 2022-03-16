const { optional } = require('joi');
const Joi = require('joi');

/*
JOI Validation script is for JSON Spirometry Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

        "data": {
            Optional["fvc"]: {
                "value": 0.877,
                "unit": "liters"
            },
            "fev1": {
                "value": 1.327,
                "unit": "liters"
            },
            Optional["pef"]: {
                "value": 500,
                "unit": "L/min"
            },
            Optional["fev6"]: {
                "value": 58,
                "unit": "liters"
            },
            Optional["fev1fev6"]: {
                "value": 0.78,
                "unit": null
            }
        }

*/

function validateSpirometry(measurementData) {
    const spirometrySchema = Joi.object(
    {
        "fvc": Joi.object(
            {
                "value": Joi.alternatives()
                    .try(Joi.number()
                        .strict()
                        .min(0)
                        .max(10)),

                "unit": Joi.valid("liters")
            }
        ).optional()
            .with('value', 'unit')
            .with('unit', 'value'),

        "fev1": {
            "value": Joi.number()
                .strict()
                .min(0)
                .max(10)
                .required(),

            "unit": Joi.string()
                .strict()
                .valid("liters")
                .required()
        },

        "pef": Joi.object(
            {
                "value": Joi.number()
                    .strict()
                    .min(0)
                    .max(2000)
                    .required(),

                "unit": Joi.string()
                    .strict()
                    .valid("L/min")
                    .required()
            }
        ).optional()
            .with('value', 'unit')
            .with('unit', 'value'),

        "fev6": Joi.object(
            {
                "value": Joi.number()
                    .strict()
                    .min(0)
                    .max(200)
                    .required(),

                "unit": Joi.string()
                    .strict()
                    .valid("liters")
                    .required()
            }
        ).optional()
            .with('value', 'unit')
            .with('unit', 'value'),

        "fev1fev6": Joi.object(
            {
                "value": Joi.number()
                    .max(10)
                    .min(0).
                    strict(),
                "unit": Joi.valid(null).strict()
            }
        ).optional().with('value', 'unit')
            .with('unit', 'value'),

    })
    ;

    const { error, value } = spirometrySchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

module.exports = validateSpirometry;