import express from "express";
import AdminCheck from "../MiddleWares/CheckAdmin.js";
import { delUser, getAllUsers, updateUser } from "../Controllers/userControllers.js";


const userRouter =express.Router()

userRouter.get("/getallusers" , AdminCheck , getAllUsers)
userRouter.delete("/deluser/:id" , AdminCheck , delUser)
userRouter.patch("/updateuser/:id" , AdminCheck , updateUser)


export default userRouter