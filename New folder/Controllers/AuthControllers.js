import allUsers from "../models/AuthModels.js"
import bcrypt from "bcryptjs"

const signUpController = async(req , res) => { 
    const body = req.body   
    const {email , password} = body
    const checkUser = await allUsers.findOne({email})
    if(checkUser){
        return res.json({
            message : "user already exist"
        })
    }
     
    const hashPass = await bcrypt.hash(password , 10)

    const userObj = {
        ...req.body,
        password : hashPass
    }
    const createUser = await allUsers.create(userObj)

    res.json({
        data : createUser,
        message : "got signup api",        
    })
}

const logInController = (req , res) => {   
    res.json({
        message : "got login api",
    })
}


export {
    signUpController,
    logInController
}