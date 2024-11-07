import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    userName:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
    },
    notes : [{
        type : Schema.mongoose.ObjectId,
        ref : "Notes"
    }]
}, {timestamps: true})

const UserModel = mongoose.model("Users", UserSchema)

export default UserModel