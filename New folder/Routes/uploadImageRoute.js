import express from "express";
import upload from "../MiddleWares/multerMiddle.js";
import uploadImage from "../Controllers/uploadImageController.js";
import AdminCheck from "../MiddleWares/CheckAdmin.js";


const uploadRouter = express.Router()

uploadRouter.post("/upload" , [upload.single("image") , AdminCheck] , uploadImage)

export default uploadRouter