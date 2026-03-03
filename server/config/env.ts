import dotenv from 'dotenv';
dotenv.config();

export const config = {
    port: process.env.PORT || 5000,
    mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/student-tools',
    jwtSecret: process.env.JWT_SECRET || 'your-secret-key',
    jwtExpire: process.env.JWT_EXPRE || '7d',
    nodeEnv: process.env.NODE_ENV || 'development'
};