import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import * as sessionService from '../services/session.service';
import { sendSuccess, sendError } from '../utils/response.util';

export const createSession = async (req: AuthRequest, res: Response) => {
    try {
        const session = await sessionService.createSession(req.userId!, req.body);
        sendSuccess(res, session, 'Session started', 201);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const getSessions = async (req: AuthRequest, res: Response) => {
    try {
        const sessions = await sessionService.getUserSessions(req.userId!);
        sendSuccess(res, sessions);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const endSession = async (req: AuthRequest, res: Response) => {
    try {
        const session = await sessionService.endSession(req.params.id, req.userId!);
        sendSuccess(res, session, 'Session ended.');
    } catch (error: any) {
        sendError(res, error.message);
    }
};