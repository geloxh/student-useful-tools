import jwt from 'jsonwebtoken';
import { config } from '../config/env';

export const generateToken = (userId: string): string => {
    return jwt.sign({ id: userId }, config.jwtSecret, {
        expiresIn: config.jwtExpire
    });
};

export const verifyToken = (token: string) => {
    return jwt.verify(token, config.jwtSecret);
};