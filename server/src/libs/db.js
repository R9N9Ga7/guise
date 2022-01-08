const mongoose = require('mongoose');

const {
  DB_HOSTNAME,
} = process.env;

const url = `mongodb://${DB_HOSTNAME}`;

async function connectDB() {
  await mongoose.connect(url);
}

module.exports = connectDB;
