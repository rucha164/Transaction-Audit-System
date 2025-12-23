const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/transactionDB")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));