const { Schema, model } = require('mongoose');

const PostSchema = new Schema({
fullname: {
    type: String,
    required: true,
    unique: true,
    
  },
  body: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
  },


 


  active: {
    type: Boolean,
    default: true,
  }
});

module.exports = model("Post", PostSchema);