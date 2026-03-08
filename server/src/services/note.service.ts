import * as noteRepo from '../repositories/note.repository';

export const createNote = async (userId: string, title: string, content: string, tags: string[]) => {
    return noteRepo.createNote({ userId, title, content, tags });
};

export const getUserNotes = async (userId: string) => {
    return noteRepo.findNotesByUserId(userId);
};

export const updateNote = async (id: string, userId: string, data: any) => {
    const note = await noteRepo.findNoteById(id);
    if (!note || note.userId.toString() !== userId) throw new Error('Note not found');
    return noteRepo.updateNote(id, data);
};

export const deleteNote = async (id: string, userId: string) => {
    const note = await noteRepo.findNoteById(id);
    if (!note || note.userId.toString() !== userId) throw new Error('Note not found');
    return noteRepo.deleteNote(id);
};