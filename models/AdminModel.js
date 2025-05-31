const mongoose = require('mongoose');

const AdminSchema = mongoose.Schema({
    fullname: String,
    
    email: String,
    password: String,
    isAdmin: Boolean,
    product : {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
    gstin : String, 
})

module.exports = mongoose.model("Admin", AdminSchema);