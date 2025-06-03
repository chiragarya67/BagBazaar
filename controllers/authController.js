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
        if(!user) return res.status(401).send("email or pass is incorrect");

       bcrypt.compare(password, user.password, (err, result)=>{
       if(result) {
          let token = generateToken(user);
          res.cookie("BAG-BAZAAR", token);
          res.send("login successfully");
       }
     else {
        res.send("email or password is incorrect");
     }
       });
}

