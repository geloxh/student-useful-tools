import mongoose, { Schema, Document } from 'mongoose';
import { TaskStatus, TaskPriority } from '../types';

export interface ITask extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    description?: string;
    status: TaskStatus;
    priority: TaskPriority;
    dueDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}

const TaskSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String },
    status: { type: String, enum: Object.values(TaskStatus), default: TaskStatus.PENDING },
    priority: { type: String, enum: Object.values(TaskPriority), default: TaskPriority.MEDIUM },
    dueDate: { type: Date }
}, { timestamps: true });

export default mongoose.model<ITask>('Task', TaskSchema);
