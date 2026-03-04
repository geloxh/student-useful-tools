import * as userRepo from '../repositories/user.repository';
import { generateToken } from '../utils/jwt.util';

export const register = async (email: string, password: string, name: string) => {
    const existingUser = await userRepo.findUserByEmail(email);
    if (existingUser) throw new Error('User already exists');

    const user = await userRepo.createUser({ email, password, name });
    const token = generateToken(user._id.toString());

    return { user: { id: user._id, email: user.email, name: user.name }, token };
};

export const login = async (email: string, password: string) => {
    const user = await userRepo.findUserByEmail(email);
    if (!user || !(await user.comparePassword(password))) {
        throw new Error('Invalid credentails');
    } 

    const token = generateToken(user._id.toString());
    return { user: { id: user._id, email: user.email, name: user.name }, token };
};