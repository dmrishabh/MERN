import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
import {notFound, errorHandler} from './middleware/errorMiddleware.js';
dotenv.config();
const port = process.env.PORT || 8080;

const app = express();

app.use('/api/users', userRoute);

app.get('/', (req, res)=> res.send('Server is up '));

app.use(notFound);
app.use(errorHandler);

app.listen(port, ()=>{
  console.log('====================================');
  console.log('Running at ', port);
  console.log('====================================');
});
