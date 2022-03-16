const { optional } = require('joi');
const Joi = require('joi');

/*
JOI Validation script is for JSON Wearable Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

 "data": {
    Optional["steps"]: {
      "value": 101,
      "unit": "steps"
    },
    Optional[  "heartRate"]: {
        "value": 87,
        "unit": "bpm"
    }
  }

*/

function validateWearable(measurementData) {
    const wearableSchema = Joi.object({
        "steps": Joi.object(
            {
                "value": Joi.alternatives()
                    .try(Joi.number()
                        .strict()
                        .min(0)),

                "unit": Joi.valid("liters")
            }
        ).optional()
            .with('value', 'unit')
            .with('unit', 'value'),

        "heartRate": Joi.object(
            {
                "value": Joi.number()
                    .strict()
                    .min(0)
                    .max(300),

                "unit": Joi.string()
                    .strict()
                    .valid("bpm"),
            }
        ).optional()
            .with('value', 'unit')
            .with('unit', 'value'),
    });

    const { error, value } = wearableSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

module.exports = validateWearable;