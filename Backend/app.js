import express from 'express';
import dotenv from 'dotenv';
import userRoute from './Routes/userRoute.js';
import connectDB from './config/db.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
dotenv.config();
const port = process.env.PORT || 8080;
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoute);


app.get('/', (req, res) => res.send('Server is up '));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log('====================================');
  console.log('Running at ', port);
  console.log('====================================');
});
