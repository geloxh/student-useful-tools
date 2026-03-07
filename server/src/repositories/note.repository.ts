import Note, { INote } from '../models/Note.model';

export const createNote = (data: Partial<INote>) => Note.create(data);
export const findNotesByUserId = (userId: string) => Note.find({ userId });
export const findNoteById = (id: string) => Note.findById(id);
export const updateNote = (id: string, data: Partial<INote>) => Note.findByIdAndUpdate(id, data, { new: true });
export const deleteNote = (id: string) => Note.findByIdAndDelete(id);