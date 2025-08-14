import express from "express";
import { addItem, changeItemStatus, getAllItems } from "../Controllers/ItemControllers.js";
import AdminCheck from "../MiddleWares/CheckAdmin.js";

const itemRouter = express.Router()

itemRouter.post("/additem" , AdminCheck , addItem)
itemRouter.get("/getallitems" , getAllItems)
itemRouter.patch("/changestatus/:id" , AdminCheck ,  changeItemStatus)

export default itemRouter