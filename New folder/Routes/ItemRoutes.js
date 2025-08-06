import express from "express";
import { addItem } from "../Controllers/ItemControllers.js";
import AdminCheck from "../MiddleWares/CheckAdmin.js";

const itemRouter = express.Router()

itemRouter.post("/additem" , AdminCheck , addItem)

export default itemRouter