import { Router } from 'express';
import * as sessionController from '../controllers/session.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { createSessionSchema } from '../validators/session.validator';

const router = Router();

router.post('/', authenticate, validate(createSessionSchema), sessionController.createSession);
router.get('/', authenticate, sessionController.getSessions);
router.patch('/:id/end', authenticate, sessionController.endSession);

export default router;