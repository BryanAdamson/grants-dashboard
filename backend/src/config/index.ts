import { config } from 'dotenv';
import mongoose from 'mongoose';

config();

mongoose.set('strictQuery', false);

let isConnected = false;

const connectDB = async (retries = 5, delay = 5000) => {
    if (process.env.NODE_ENV === 'test') {
        return;
    }

    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    for (let i = 0; i < retries; i++) {
        try {
            await mongoose.connect(process.env.MONGO_URI || '');
            isConnected = true; // Set connection status to true
            console.log('MongoDB Connected');
            return;
        } catch (error) {
            if (error instanceof Error) {
                console.error(`MongoDB connection failed (attempt ${i + 1}/${retries}):`, error.message);
            } else {
                console.error(`An unknown error occurred during MongoDB connection (attempt ${i + 1}/${retries}).`);
            }

            if (i < retries - 1) {
                console.log(`Retrying in ${delay / 1000} seconds...`);
                await new Promise(res => setTimeout(res, delay));
            } else {
                console.error('All retries failed. Exiting...');
                if (process.env.NODE_ENV !== 'test') {
                    process.exit(1);
                } else {
                    throw new Error('MongoDB connection failed after multiple retries');
                }
            }
        }
    }
};

export default connectDB;
