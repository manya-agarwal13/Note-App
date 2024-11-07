import express from 'express'
import { Create,Delete, GetNotes, UpdateNotes} from '../controllers/Notes.js'
import { VerificationToken } from '../middlewares/verificationtoken.js'


const NotesRoutes = express.Router()

NotesRoutes.post('/createNote',VerificationToken, Create)
NotesRoutes.put('/updateNotes/:id', VerificationToken,UpdateNotes)
NotesRoutes.delete('/deleteNotes/:id', VerificationToken, Delete)
NotesRoutes.get('/getNotes',VerificationToken, GetNotes )

export default NotesRoutes