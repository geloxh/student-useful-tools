import app from './app';
import { connectDB } from './config/database';
import { config } from './config/env';
import logger from './utils/logger.util';

const startServer = async () => {
    await connectDB();

    app.listen(config.port, () => {
        logger.info('Server running on port ${config.port}');
    });
};

startServer();