import { z } from 'zod';

export const createNoteSchema = z.object ({
    title: z.string().min(1).max(200),
    content: z.string().min(1),
    tags: z.array(z.string()).optional()
});

export const updateNoteSchema = createNoteSchema.partial();