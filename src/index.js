const mongoose = require("mongoose");
const db = mongoose.connection;

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    minLength: 3,
  },
  role: {
    type: String,
    enum: ["USER", "ADMIN", "MODERATOR"],
    required: true,
  },
});

console.dir(db);

mongoose.connect("mongodb://localhost:27017/mongotest", (error) => {
  error
    ? console.error("Error conection with mongod")
    : console.log("Connection with mondo db is success!!! ");
});
