import User, { TUser } from '../models/User.model';

export const createUser = async (data: Partial<IUser>) => {
    return await User.create(data);
};

export const createUser = async (data: Partial<IUser>) => {
    return await User.create(data);
};

export const findUserByEmail = async (email: string) => {
    return await User.findOne({ email });
};

export const findUserById = async (id: string) => {
    return await User.findById(id).select('password');
};