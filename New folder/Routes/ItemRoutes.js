import express from "express";
import { addItem, getAllItems } from "../Controllers/ItemControllers.js";
import AdminCheck from "../MiddleWares/CheckAdmin.js";

const itemRouter = express.Router()

itemRouter.post("/additem" , AdminCheck , addItem)
itemRouter.get("/getallitems" , getAllItems)

export default itemRouter