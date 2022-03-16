const Joi = require('joi');

/*
JOI Validation script is for JSON Weight Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

  "data": {
    "weight": {
      "value": 161.2,
      "unit": "lbs"
    }
  }
*/

function validateWeight(measurementData) {
    const weightSchema = Joi.object({
        "weight": {
            "value": Joi.number()
            .strict()
            .min(0)
            .max(1000)
            .required(),

            "unit": Joi.valid("lbs")
            .required(),
        }
    });
    const { error, value } = weightSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    };
};


module.exports = validateWeight;