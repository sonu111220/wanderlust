const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

// 🔹 Basic schema structure
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// 🔹 Plugin adds username + hashed password fields automatically
userSchema.plugin(passportLocalMongoose);

// 🔹 Export model
module.exports = mongoose.model("User", userSchema);
