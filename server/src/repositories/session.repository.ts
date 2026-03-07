import Session, { ISession } from '../models/Session.model';

export const createSession = (data: Partial<ISession>) => Session.create(data);
export const findSessionsByUserId = (userId: string) => Session.find({ userId });
export const findSessionById = (id: string) => Session.findById(id);
export const updateSession = (id: string, data: Partial<ISession>) => Session.findByIdAndUpdate(id, data, { new: true });