var mongoose = require("mongoose");
const Joi = require("@hapi/joi");
var productSchema = mongoose.Schema({
    name: String,
    description: String,
    category: String,
    subCategory: String,
    price: Number,
});
var Product = mongoose.model("Product", productSchema);

function validateProduct(data) {
    const schema = Joi.object({
        name: Joi.string().min(3).max(100).required(),
        description: Joi.string(),
        category: Joi.string(),
        subCategory: Joi.string(),
        price: Joi.number().min(0).required(),
    });
    return schema.validate(data, { abortEarly: false });
}
module.exports.Product = Product;
module.exports.validate = validateProduct;