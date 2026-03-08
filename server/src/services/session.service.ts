import * as sessionRepo from '../repositories/session.repository';

export const createSession = async (userId: string, data: any) => {
    return sessionRepo.createSession({ userId, ...data });
};

export const getUserSessions = async (userId: string) => {
    return sessionRepo.findSessionsByUserId(userId);
};

export const endSession = async (id: string, userId: string) => {
    const session = await sessionRepo.findSessionById(id);
    if (!session || session.userId.toString() !== userId) throw new Error('Session not found');
    return sessionRepo.updateSession(id, { endTime: new Date() });
};