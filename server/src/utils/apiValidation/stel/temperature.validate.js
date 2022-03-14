const Joi = require('joi');

/*
JOI Validation script is for JSON Temperature Object Below
** NOTE ** Optionals also TODO: update ranges appropriately


  "data": {
    "temperature": {
      "unit": "celsius",
      "value": 36.32
    }
  }


*/

function validateTemperature(measurementData) {
    const TemperatureSchema = Joi.object({
        "Temperature": {
            "value": Joi.number()
            .strict()
            .min(20)
            .max(50)
            .required(),

            "unit": Joi.valid("celsius")
            .required(),
        }
    });
    const { error, value } = temperatureSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    };
};

module.exports = validateTemperature;