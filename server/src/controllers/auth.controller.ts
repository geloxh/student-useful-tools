import { Request, Response } from 'express';
import * as authService from '../services/auth.service';
import { sendSuccess, sendError } from '../utils/response.util';

export const register = async (req: Request, res: Response) => {
    try  {
        const { email, password, name} = req.body;
        const result = await authService.register(email, password, name);
        sendSuccess(res, result, 'User registered successfully', 201); 
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const result = await authService.login(email, password);
        sendSuccess(res, result, 'Login successful');
    } catch (error: any) {
        sendError(res, error.message, 401);
    }
};