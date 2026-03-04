import { Router } from 'express';
import authRoutes from './auth.routes';
import noteRoutes from './note.routes';
import taskRoutes from './task.routes';
import sessionRoutes from './session.routes';
import calculationRoutes from './calculation.routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/notes', noteRoutes);
router.use('tasks', taskRoutes);
router.use('/sessions', sessionRoutes);
router.use('/calculations', calculationRoutes);

export default router;