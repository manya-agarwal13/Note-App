import mongoose from 'mongoose'

const NotesSchema =  mongoose.Schema({
    title:{
        type:String
    },
    userId:{
        type:String
    }
}, {timestamps:true})

const NotesModel = mongoose.model('Notes', NotesSchema)

export default NotesModel