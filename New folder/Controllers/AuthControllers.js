import { response } from "express"
import allUsers from "../models/AuthModels.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const signUpController = async(req , res) => { 
    const body = req.body   
    const {email , password} = body
    if (!email || !password) {
      return res.status(400).json({ 
        message: "Email and password are required"
     });
    }
    const checkUser = await allUsers.findOne({email})
    if(checkUser){
        return res.status(409).json({
            message : "user already exist"
        })
    }
     
    const hashPass = await bcrypt.hash(password , 10)

    const userObj = {
        ...req.body,
        password : hashPass,
        userType : "user",
        
    }
    const createUser = await allUsers.create(userObj)

    res.json({
        data : createUser,
        message : "Signed Up Successfully",        
    })
}




const logInController = async(req , res) => {   
    const{email , password} = req.body;
    const checkEmail = await allUsers.findOne({email})
    if(!checkEmail){
        return res.status(404).json({
            message : "Invalid Email or Password"
        })
    }

    const checkPass =await bcrypt.compare(password , checkEmail.password)
    if(!checkPass){
        return res.status(404).json({
            message : "Invalid Email or Password"
        })
    }
    const token = jwt.sign({id : checkEmail._id }, process.env.SECRET_Token)
    res.status(200).json({
        message : "Logged in successfully",
        data : checkEmail,
        token : token
    })
}


export {
    signUpController,
    logInController
}