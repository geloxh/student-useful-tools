import { Router } from 'express';
import * as calcController from '../controllers/calculation.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { calculationSchema } from '../validators/calculation.validator';

const router = Router();

router.post('/', authenticate, validate(calculationSchema), calcController.calculate);
router.get('/history', authenticate, calcController.getHistory);

export default router;