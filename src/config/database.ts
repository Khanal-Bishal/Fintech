import mongoose from 'mongoose'
const colors = require('colors')
import dotenv from 'dotenv'
dotenv.config()

const MONGO_URL = process.env.MONGO_URL as string

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log(colors.rainbow("Database connected"));
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default connectDB