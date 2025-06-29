const express = require('express');
const router = express.Router();
const AdminModel = require("../models/AdminModel")
const isAdmin = require("../middlewares/isAdmin")

if (process.env.NODE_ENV === "development") {

    router.post("/create", async (req, res) => {
        const Admins = await AdminModel.find();
        if (Admins.length > 0) {
            return res
                .status(500)
                .send("You dont have permission to create new admin");
        }
        let { fullname, email, password } = req.body;

        let createdAdmin = await AdminModel.create({
            fullname,
            email,
            password,
        })
        res.status(201).send(createdAdmin);


    });
}

router.post("/adminPanel", (req, res) => {
    let success = req.flash("success");
    res.render("createproducts", { success });
});





module.exports = router;