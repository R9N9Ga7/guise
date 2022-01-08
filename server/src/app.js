const express = require('express');
const authRouter = require('./routes/authRouter.js');

const connectDB = require('./libs/db');

const app = express();

app.use(express.json());
app.use('/api', authRouter);



try{
  connectDB();
  app.listen(process.env.PORT || 3000, () => {
    console.info(`Server started on port: ${process.env.PORT || 3000}. Pid:${process.pid}!`);
  });
} catch (error){
  console.error(error);
}
