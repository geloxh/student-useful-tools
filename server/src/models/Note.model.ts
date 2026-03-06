import mongoose, { Schema, Document } from 'mongoose';

export interface INote extends Document {
    userId: mongoose.Types.ObjectId;
    title: string;
    content: string;
    tags: string[];
    createdAt: Date;
    updatedAt: Date;
}

const NoteSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    tags: [{ type: String }]
}, { timestamps: true });

export default mongoose.model<INote>('Note', NoteSchema);