import { Response } from '../middleware/auth/middleware';
import { AuthRequest } from '../services/calculation.service';
import * as calcService from '../services/calculation.service';
import { sendSuccess, sendError } from '../utils/response.util';

export const calculate = async (req: AuthRequest, res: Response) => {
    try {
        const { expression } = req.body;
        const result = await calcService.performCalculation(req.userId!, expression);
        sendSuccess(res, result, 'Calculation performed.', 201);
    } catch (error: any) {
        sendError(res, 'Invalid expression', 400);
    }
};

export const getHistory = async (req: AuthRequest, res: Response) => {
    try {
        const history = await calcService.getCalculationHistory(req.userId!);
        sendSuccess(res, history);
    } catch (error: any) {
        sendError(res, error.message);
    }
};