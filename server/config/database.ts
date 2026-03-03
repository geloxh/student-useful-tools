import mongoose from 'mongoose';
import { config } from './env';
import logger from '../src/utils/logger.util';

export const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri);
        logger.info('MongoDB connected');
    } catch (error) {
        logger.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};