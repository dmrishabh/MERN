import mongoose from "mongoose";
const connectDB = async ()=>{
 try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database connected at ${conn.connection.host}`);
 } catch (error) {
    console.log(process.env.MONGO_URI)
    console.error(`You got an error: ${error.message}`);
    process.exit(1);
 }
}
export default connectDB; 