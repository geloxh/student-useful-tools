import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import * as taskService from '../services/task.service';
import { sendSuccess, sendError } from '../utils/response.util';

export const createTask = async (req: AuthRequest, res: Response) => {
    try {
        const task = await taskService.createTask(req.userId!, req.body);
        sendSuccess(res, task, 'Task Created', 201);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const getTasks = async (req: AuthRequest, res: Response) => {
    try {
        const tasks = await taskService.getUserTasks(req.userId!);
        sendSuccess(res, tasks);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const updateTask = async (req: AuthRequest, res: Response) => {
    try {
        const task = await taskService.updateTask(req.params.id, req.userId!, req.body);
        sendSuccess(res, task, 'Task updated.');
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const deleteTask = async (req: AuthRequest, res: Response) => {
    try {
        await taskService.deleteTask(req.params.id, req.userId!);
        sendSuccess(res, null, 'Task deleted.');
    } catch (error: any) {
        sendError(res, error.message);
    }
};