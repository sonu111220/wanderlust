
const Joi = require("joi");

module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required(),
    description: Joi.string().allow(""),
    price: Joi.number().min(0).required(),
    location: Joi.string().allow(""),
    country: Joi.string().allow(""),
    image: Joi.alternatives().try(
      Joi.object({
        url: Joi.string().uri().required(),
        filename: Joi.string().allow(""),
      }),
      Joi.string().uri()
    ).allow(null, ""),
  }).required(),
});




module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required(),
    body: Joi.string().required()
  }).required()
});
