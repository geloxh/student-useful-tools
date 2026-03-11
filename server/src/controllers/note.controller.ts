import { Response } from 'express';
import { AuthRequest } from '../middleware/auth.middleware';
import * as noteService from '../services/note.service';
import { sendSuccess, sendError } from '../utils/response.util';

export const createNote = async (req: AuthRequest, res: Response) => {
    try {
        const { title, content, tags } = req.body;
        const note = await noteService.createNote(req.userId!, title, content, tags);
        sendSuccess(res, note, 'Note created', 201);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const getNotes = async (req: AuthRequest, res: Response) => {
    try {
        const notes = await noteService.getUserNotes(req.userId!);
        sendSuccess(res, notes);
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const updateNote = async (req: AuthRequest, res: Response) => {
    try { 
        const note = await noteService.updateNote(req.params.id, req.userId!, req.body);
        sendSuccess(res, note, 'Note updated.');
    } catch (error: any) {
        sendError(res, error.message);
    }
};

export const deleteNote = async (req: AuthRequest, res: Response) => {
    try {
        await noteService.deleteNote(req.params.id, req.userId!);
        sendSuccess(res, null, 'Note deleted.');
    } catch (error: any) {
        sendError(res, error.message);
    }
};