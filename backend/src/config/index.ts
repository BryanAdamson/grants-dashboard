import { config } from 'dotenv';
import mongoose from 'mongoose';

config(); // Load environment variables

mongoose.set('strictQuery', false); // Handling strictQuery warning

let isConnected = false; // Track connection status

const connectDB = async () => {
    if (process.env.NODE_ENV === 'test') {
        return; // Skip connecting if in test environment
    }

    if (isConnected) {
        console.log('Already connected to MongoDB');
        return;
    }

    try {
        await mongoose.connect(process.env.MONGO_URI || '');
        isConnected = true; // Set connection status to true
        console.log('MongoDB Connected');
    } catch (error) {
        if (error instanceof Error) {
            console.error('MongoDB connection failed:', error.message);
        } else {
            console.error('An unknown error occurred during MongoDB connection.');
        }

        if (process.env.NODE_ENV !== 'test') {
            process.exit(1); // Only exit the process in non-test environments
        } else {
            throw new Error('MongoDB connection failed');
        }
    }
};

export default connectDB;
