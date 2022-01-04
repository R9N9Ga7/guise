const express = require('express');

const connectDB = require('./libs/db');

const app = express();

try{
  connectDB();
  app.listen(process.env.PORT || 3000, () => {
    console.info(`Server started on port: ${process.env.PORT || 3000}. Pid:${process.pid}!`);
  });
} catch (error){
  console.error(error);
}
