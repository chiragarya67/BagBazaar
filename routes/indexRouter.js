const express = require('express');
const router = express.Router();
const isloggedin = require('../middlewares/isloggedin');
const productModel  = require('../models/productModel');



router.get("/", (req, res)=>{
    let error = req.flash("error")
    res.render("index", {error});
});

router.get("/shop", isloggedin,  async (req, res)=>{
//    let products = await productModel.find();
//    res.render("shop", { products });
let products = await productModel.find();
console.log(products);

})

module.exports = router;