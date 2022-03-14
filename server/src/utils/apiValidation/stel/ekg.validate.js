const Joi = require('joi');

/*
JOI Validation script is for JSON EKG Object Below
** NOTE ** Optionals also TODO: update ranges appropriately

"data": {
    "irregularPulse": {
      "value": true|false,
      "unit": null
    }
  }
*/

function validateEKG(measurementData) {
    const EKGSchema = Joi.object({
        "irregularPulse": {
            "value": Joi.boolean()
            .strict()
            .required(),
            "unit": Joi.valid(null)
            .required(),
        }

    })
    const { error, value } = EKGSchema.validate(measurementData)

    if (error != undefined) {
        return error.details[0].message
    }
}

// const measurementData =
// {
//     "irregularPulse": {
//         "value": true,
//         "unit": null,
//     }
// }


// const result = validateEKG(measurementData);
// console.log(result);

module.exports = validateEKG;