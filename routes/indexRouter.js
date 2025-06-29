const express = require('express');
const router = express.Router();
const productModel  = require('../models/productModel');
const isloggedIn = require('../middlewares/isloggedin');
const userModel = require('../models/userModel');



router.get("/", (req, res)=>{
    let error = req.flash("error")
    res.render("index", {error, loggedin: false});
});

router.get("/shop", isloggedIn, async (req, res) => {
   let products = await productModel.find();
   let success = req.flash("success");
   res.render("shop", { products, success, user: req.user });
});

router.get("/cart", isloggedIn, async (req, res) => {
    let user = await userModel
    .findOne( {email: req.user.email })
    .populate("cart")
    res.render("cart", { user});
});


router.get("/addtocart/:productid", isloggedIn, async (req, res)=>{
   let user = await userModel.findOne({email: req.user.email});
   user.cart.push(req.params.productid);
   await user.save();
   req.flash("success", "added into cart");
   res.redirect("/shop")
   
  


});

router.post("/removecart/:id", isloggedIn, async (req, res) => {
    try {
        let user = await userModel.findOne({ email: req.user.email });
        if (!user) return res.redirect("/cart");

        user.cart = user.cart.filter(
            (productId) => productId.toString() !== req.params.id
        );

        await user.save();
        req.flash("success", "Product removed from cart");
        res.redirect("/cart");
    } catch (err) {
        console.error(err);
        req.flash("error", "Something went wrong");
        res.redirect("/cart");
    }
});


router.get("/Account", isloggedIn, async (req, res) => {
        const user = await userModel.findOne({ email: req.user.email });
        res.render("Account", { user });
});

module.exports = router;