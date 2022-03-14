const Joi = require('joi');

function validateGlucose(measurementData) {
    const glucoseSchema = Joi.object({
        "glucose": {
            "value": Joi.number()
            .strict()
            .min(0)
            .max(1000)
            .required(),

            "unit": Joi.valid("mg/dL")
            .required(),
        }
    });
    const { error, value } = glucoseSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    };
};

// const measurementData =
// {
//     "irregularPulse": {
//         "value": true,
//         "unit": null,
//     }
// }


// const result = validateEKG(measurementData);
// console.log(result);

module.exports = validateGlucose;