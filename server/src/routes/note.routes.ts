import { Router } from 'express';
import * as noteController from '../controllers/note.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { createNoteSchema, updateNoteSchema } from '../validators/note.validator';

const router = Router();

router.post('/', authenticate, validate(createNoteSchema), noteController.createNote);
router.get('/', authenticate, noteController.getNotes);
router.put('/:id', authenticate, validate(updateNoteSchema), noteController.updateNote);
router.delete('/:id', authenticate, noteController.deleteNote);

export default router;