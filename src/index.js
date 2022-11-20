const mongoose = require("mongoose");

const db = mongoose.connection;

db.on('error', () => {
    console.error('Error conection with mongod');
});

db.once('open', () => {
    console.log('Connection with mondo db is success!!! ');
});

console.dir(db);

mongoose.connect('mongodb://localhost:27017/mongotest');