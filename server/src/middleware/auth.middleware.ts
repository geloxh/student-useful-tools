import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/jwt.util';
import { sendError } from '../utils/response.util';

export interface AuthRequest extends Request {
    userId?: string;
}

export const authenticate = (req: AuthRequest, res: Response, next: NextFunction) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return sendError(res, 'No token provided', 401);

        const decoded = verifyToken(token) as { id: string };
        req.userId = decoded.id;
        next();
    } catch (error) {
        sendError(res, 'Invalid token', 401);
    }
};