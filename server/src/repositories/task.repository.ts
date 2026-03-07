import Task, { ITask } from '../models/Task.model';

export const createTask = (data: Partial<ITask>) => Task.create(data);
export const findTasksByUserId = (userId: string) => Task.find({ userId });
export const findTaskById = (id: string) => Task.findById(id);
export const updateTask = (id: string, data: Partial<ITask>) => Task.findByIdAndUpdate(id, data, { new: true });
export const deleteTask = (id: string) => Task.findByIdAndDelete(id);