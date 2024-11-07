import jwt from 'jsonwebtoken'
import UserModel from '../models/Auth.js'

const VerificationToken = async(req, res, next) => {
    try {
        const token = req.cookies.token
        if(!token){
            return res.status(303).json({success:false, message:"unauthorized , please login"})
        }
        const decoded = await jwt.decode(token, process.env.SecretKey)
        // const user = await UserModel.findById(decoded.userId)
        // if(!user){
        //     return res.status(404).json({success:false, message:"user not found"})
        // }
        req.userId = decoded.userId; 
        next()
    } catch (error) {
        console.log(error)
        res.status(500).json({success:false, message:"internal server error"})
    }
}

export {VerificationToken}