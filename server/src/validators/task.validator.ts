import { z } from 'zod';
import { TaskStatus, TaskPriority } from '../types';

export const createTaskSchema = z.object ({
    title: z.string().min(1).max(200),
    description: z.string().optional(),
    status: z.nativeEnum(TaskStatus).optional(),
    priority: z.nativeEnum(TaskPriority).optional(),
    dueDate: z.string().datetime().optional()
});

export const updateTaskSchema = createTaskSchema.partial();