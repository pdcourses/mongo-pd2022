const express = require("express");
const {
  addUser,
  deleteUser,
  updateUser,
  getUserById,
} = require("./controllers/user.controller.js");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.post('/user', addUser);
app.get('/user', getUserById);
app.put('/user', updateUser);
app.delete('/user', deleteUser);

app.listen(PORT, () => {
  console.log('Server is listening...');
});

