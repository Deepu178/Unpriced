const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your name!"],
  },
  email: {
    type: String,
    required: [true, "Please provide your email"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email"],
  },
  
  phone: {
    type: Number,
    required: [true, "please provide your number"],
  },
  password:{
    type:String,
    required:[true, "Please provide a password"],
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
