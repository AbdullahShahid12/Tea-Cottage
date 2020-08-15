const express = require("express");
let router = express.Router();
const validateProduct = require("../../middlewares/validateProduct");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");
var { Product } = require("../../models/product");
const cookieParser = require("cookie-parser");

router.get("/", async(req, res) => {
    let categor = req.query.category;
    let subCategor = req.query.subCategory;
    console.log(subCategor);
    let page = Number(req.query.page ? req.query.page : 1);
    let perPage = Number(req.query.perPage ? req.query.perPage : 9);
    console.log(perPage);
    let skipRecords = perPage * (page - 1);
    let products = "";

    if (subCategor == "no") {
        products = await Product.find({ category: categor })
            .skip(skipRecords)
            .limit(perPage);
        console.log("hello");
    } else {
        products = await Product.find({
                category: categor,
                subCategory: subCategor,
            })
            .skip(skipRecords)
            .limit(perPage);
        console.log(products);
    }

    let total = await Product.countDocuments();

    return res.send({ total, products });
});
router.get("/:id", async(req, res) => {
    try {
        let product = await Product.findById(req.params.id);
        if (!product)
            return res.status(400).send("Product with given id is not present");
        return res.send(product);
    } catch (err) {
        return res.status(400).send("Invalid ID");
    }
});
router.put("/:id", validateProduct, auth, admin, async(req, res) => {
    console.log("This is update");
    let product = await Product.findById(req.params.id);
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;

    await product.save();
});
router.delete("/:id", auth, admin, async(req, res) => {
    let product = await Product.findByIdAndDelete(req.params.id);

    return res.send(product);
});
router.post("/", validateProduct, auth, admin, async(req, res) => {
    let product = new Product();
    product.name = req.body.name;
    product.description = req.body.description;
    product.price = req.body.price;
    product.category = req.body.category;
    console.log(req.body.category);
    product.subCategory = req.body.subCategory;

    await product.save();
    return res.send(product);
});

router.get("/cart/:id", async function(req, res, next) {
    var product = "a";
    if (req.params.id == -10) {} else {
        product = await Product.findById(req.params.id);
    }

    let cart = [];

    if (req.cookies.cart) cart = req.cookies.cart;
    console.log(req.cookies.cart);
    if (req.params.id == -10) {} else {
        cart.push(product);
    }

    res.cookie("cart", cart);

    return res.send(cart);
    res.redirect("/products");
});
router.get("/cart/remove/:id", async function(req, res, next) {
    let cart = [];
    if (req.cookies.cart) cart = req.cookies.cart;
    cart.splice(
        cart.findIndex((c) => c._id == req.params.id),
        1
    );
    res.cookie("cart", cart);
    return res.send(cart);
    res.redirect("/cart");
});

module.exports = router;