import NotesModel from "../models/Notes.js"
import NotesRoutes from "../routes/Notes.js";


const Create = async (req, res) => {
    try {
        const userId= req.userId
        const {title} =req.body;

        if(!title){
            return res.status(303).json({success:false, message:"Title is required"})
        }
        const NewNotes =new NotesModel({
            title, userId:userId
        })
        await NewNotes.save()
        res.status(200).json({success:true, message:"Notes created successfully", Notes: NewNotes})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"internal server error"})
    }
}

const UpdateNotes =  async(req, res) => {
    try {
        const userId = req.userId
        const NotesId = req.params.id
        const {title} = req.body
        const FindNotes = await NotesModel.findById(NotesId)
        if(!FindNotes){
            res.status(404).json({success:false, message:"notes not found"})
        }

        const NotesuserId =FindNotes.userId.toString()

        if(userId.toString() !== NotesuserId){
            res.status(404).json({success:false, message:"unauthorized user"})
        }
        console.log('NotesuserId',NotesuserId)

        const updateNotes = await NotesModel.findByIdAndUpdate(NotesId, {title},{new:true})
        console.log(FindNotes)
        res.status(200).json({success:true, message:"notes updated successfully", updateNotes})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"internal server error"})
    }
}

const Delete = async(req,res) => {
    try {
        const userId = res.userId
        console.log(userId)
        const NotesId = req.params.id

        const FindNotes = await NotesModel.findById({_id:NotesId})
        if(!FindNotes){
            res.status(404).json({success:false, message:"notes not found"})
        }
        const NotesuserId =FindNotes.userId.toString()
        if(userId.toString() !== NotesuserId){
            res.status(404).json({success:false, message:"unauthorized user"})
        }
        const DeletedNote = await NotesModel.findByIdAndDelete(NotesId)
        res.status(200).json({success:true, message:"notes deleted successfully", DeletedNote})

    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"internal server error"})
    }
}

const GetNotes = async(req,res)=>{
    try {
        const userId = res.userId

        const Notes = await NotesRoutes.find({userId})
        if(!Notes){
            return res.status(404).json({success:false, message:"no data found"})
        }
        res.status(200).json({success:true,Notes})
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"internal server error"})
    }
}

export {Create,UpdateNotes, Delete, GetNotes}