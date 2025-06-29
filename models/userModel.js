const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname: String,
    email: String,
    password: String,
   cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"product",
    }],
    orders: {
        type: Array,
        default: [],
    },
    contact: Number,
    picture: String,
  },  {
  timestamps: true // ✅ adds createdAt and updatedAt
    });

module.exports = mongoose.model("users", userSchema);