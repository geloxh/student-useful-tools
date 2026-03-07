import mongoose, { Schema, Document } from 'mongoose';

export interface ICalculation extends Document {
    userId: mongoose.Types.ObjectId;
    expression: string;
    result: string;
    createdAt: Date;
}

const CalculationSchema = new Schema ({
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    expression: { type: String, required: true },
    result: { type: String, required: true }  
}, { timestamps: true });

export default mongoose.model<ICalculation>('Calculation', CalculationSchema);