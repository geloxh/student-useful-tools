import * as taskRepo from '../repositories/task.repository';

export const createTask = async (userId: string, data: any) => {
    return taskRepo.createTask({ userId, ...data });
};

export const getUserTasks = async (userId: string) => {
    return taskRepo.findTasksByUserId(userId);
};

export const updateTask = async (id: string, userId: string, data: any) => {
    const task = await taskRepo.findTaskById(id);
    if (!task || task.userId.toString() !== userId) throw new Error('Task not found');
    return taskRepo.updateTask(id, data);
};

export const deleteTask = async (id: string, userId: string) => {
    const task = await taskRepo.findTaskById(id);
    if (!task || task.userId.toString() !== userId) throw new Error('Task not found');
    return taskRepo.deleteTask(id);
};