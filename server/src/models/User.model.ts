import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';

export interface IUser extends Document {
    email: string;
    password: string;
    name: string;
    comparePassword(password: string): Promise<boolean>;
}

const UserSchema = new Schema ({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true } 
}, { timestamps: true });

UserSchema.methods.comparePassword = async function(password: string) {
    return bcrypt.compare(password, this.password);
};

export default mongoose.model<IUser>('User', UserSchema);