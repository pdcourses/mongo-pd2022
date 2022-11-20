const yup = require('yup');
const mongoose = require("mongoose");
const db = mongoose.connection;

const emailVS = yup.string().email();

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

//console.dir(db);

const User = mongoose.connection.model('User', userSchema);

const testUserObj = {
  name: 'Test',
  surname: 'Testovich',
  role: 'USER',
  email: 'test@mail.com'
};

const testUser = new User(testUserObj);
testUser.save().then(console.log).catch(console.error);

mongoose.connect("mongodb://localhost:27017/mongotest", (error) => {
  error
    ? console.error("Error conection with mongod")
    : console.log("Connection with mondo db is success!!! ");
});
