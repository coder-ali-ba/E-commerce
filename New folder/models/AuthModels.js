import {mongoose,  model, Schema } from "mongoose";

const userModels = new mongoose.Schema({
    fullName : {
        type : String,
        required : true 
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type  : String ,
        required : true
    },
    phoneNo : {
        type : String,
        required : true
    },
    createdAt :{
        type : Date,
        default : Date.now()
    },
    createdBy : {},
    userType : {
        type : String,
        required : true,
        enum : ["user" , "admin"]
    },
    isVarified :{
       type : Boolean,
       default : false
    }
})

const allUsers = mongoose.model("allUsers" , userModels)

export default allUsers