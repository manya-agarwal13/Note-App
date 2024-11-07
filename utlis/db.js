import mongoose from "mongoose";

const DbCon =async()=>{
    try {
        mongoose.connect(process.env.MONGODB_URL)
        console.log('MONGODB is connected')
    } catch (error) {
        console.log('error in mongodb connection', error)
    }
}

export default DbCon