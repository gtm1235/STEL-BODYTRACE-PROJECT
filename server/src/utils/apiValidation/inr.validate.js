const { optional } = require('joi');
const Joi = require('joi');

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