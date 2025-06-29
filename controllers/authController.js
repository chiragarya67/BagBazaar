const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const { generateToken } = require('../utils/generateToken')
const userModel = require('../models/userModel');



module.exports.registerUser = async (req, res) => {
    try {
        let { fullname, email, password } = req.body;
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, async (err, hash) => {
                if (err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        password: hash,
                        fullname,
                    })
                    const token = generateToken(user);
                    res.cookie("BAG-BAZAAR", token);
                    res.send("User created successfully");
                }
            })
        })
    }
    catch (err) {
        console.log(err.message);
    }
}

module.exports.loginUser = async (req, res)=>{
    let {email, password} = req.body

     let user = await userModel.findOne({email: email});
        if (!user) {
            req.flash("error", "Wrong email or password!");
            return res.redirect("/");
}
       bcrypt.compare(password, user.password, async(err, result)=>{
       if(result) {
          let token = generateToken(user);
          res.cookie("BAG-BAZAAR", token);
          res.redirect("/shop")
       }
     else {
              req.flash("error", "wrong email or pass")
              res.redirect("/")
     }
       });
}

module.exports.logout = async (req, res)=>{
    res.cookie("BAG-BAZAAR", "");
    res.redirect("/");
}