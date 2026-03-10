import { z } from 'zod';

export const calculationSchema = z.object({
    expression: z.string().min(1)
}); 