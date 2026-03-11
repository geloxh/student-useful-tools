import { Router } from 'express';
import * as taskController from '../controllers/task.controller';
import { authenticate } from '../middleware/auth.middleware';
import { validate } from '../middleware/validate.middleware';
import { createTaskSchema, updateTaskSchema } from '../validators/task.validator';

const router = Router();

router.post('/', authenticate, validate(createTaskSchema), taskController.createTask);
router.get('/', authenticate, taskController.getTasks);
router.put('/:id', authenticate, validate(updateTaskSchema), taskController.updateTask);
router.delete('/:id', authenticate, taskController.deleteTask);

export default router;