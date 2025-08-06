import express, { urlencoded } from "express";
import dotenv from "dotenv"
import cors from "cors"
import AuthRouter from "./Routes/AuthRoute.js";
import mongoose from "mongoose";
import itemRouter from "./Routes/ItemRoutes.js";
import uploadRouter from "./Routes/uploadImageRoute.js";

const app = express()
dotenv.config()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("mongoDb Connected"))
.catch(()=>console.log("connection error"))


app.use("/api/auth" , AuthRouter)
app.use("/api/item" , itemRouter)
app.use("/api/image" , uploadRouter)


const PORT = process.env.PORT


app.listen(PORT , ()=>{
    console.log(`Server is up on http://localhost:${PORT}`);
    
})