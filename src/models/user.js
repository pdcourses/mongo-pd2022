const mongoose = require("mongoose");
const connection = require("./../db");
const yup = require('yup');

const emailVS = yup.string().email();

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
    minLength: 1,
  },
  surname: {
    type: String,
    required: false,
    minLength: 1,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: value => emailVS.validate(value)
    }
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "MODERATOR"],
    required: true,
  },
});

const User = mongoose.connection.model('User', userSchema);

module.exports = User;
