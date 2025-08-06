import jwt from "jsonwebtoken"
import allUsers from "../models/AuthModels.js";

const AdminCheck = async(req , res , next) => {
    try {
       const isAdmin = req.headers.authorization

    if (!isAdmin) {
      return res.status(401).json({ message: "Unauthenticated user" });
    }
    const token = isAdmin.split(" ")[1]
    const verify = jwt.verify(token , process.env.SECRET_Token)
    
    if(!verify){
        return res.status(401).json({ message: "Not Verified User" });
    }
    const lastStep =await allUsers.findOne({ _id : verify.id })
    if(!lastStep){
        return res.status(401).json({ message: "Not Authorezed User" });
    }   
    next()   
    } catch (error) {
        res.status(400).json({
            message : "Authorization Error"
        })
    }
    
}

export default AdminCheck