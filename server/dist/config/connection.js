import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.MONGO_URI;
const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected");
    }
    catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};
export default connectDB;
