import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger.util';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.stack);
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || 'Server Error'
    });
};