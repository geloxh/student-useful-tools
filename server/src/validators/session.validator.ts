import { z } from 'zod';

export const createSessionSchema = z.object({
    title: z.string().min(1).max(200),
    duration: z.number().positive(),
    startTime: z.string().datetime(),
    type: z.enum(['focus', 'break']).optional()
});