const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  _id: String,          
  name: String,
  balance: Number
});

module.exports = mongoose.model("User", userSchema);