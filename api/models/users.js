const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
fullname: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "Username should be unique"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },


 


  active: {
    type: Boolean,
    default: true,
  }
});

module.exports = model("User", UserSchema);