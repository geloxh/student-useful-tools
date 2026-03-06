import mongoose, { Schema, Document } from 'mongoose';

export interface ISession extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    duration: number;
    startTime: Date;
    endTime?: Date;
    type: 'focus' | 'break';
    createdAt: Date;
}

const SessionSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    duration: { type: Number, required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    type: { type: String, enum: ['focus', 'break'], default: 'focus' }
}, { timestamps: true });

export default mongoose.model<ISession>('Session', SessionSchema);