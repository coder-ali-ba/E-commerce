import express from "express";
import { addItem, changeItemStatus, deleteItemController, getAllItems, updateItemController } from "../Controllers/ItemControllers.js";
import AdminCheck from "../MiddleWares/CheckAdmin.js";

const itemRouter = express.Router()

itemRouter.post("/additem" , AdminCheck , addItem)
itemRouter.get("/getallitems" , getAllItems)
itemRouter.patch("/changestatus/:id" , AdminCheck ,  changeItemStatus)
itemRouter.delete("/deleteitem/:id" , AdminCheck , deleteItemController)
itemRouter.put("/updateitem/:id" , AdminCheck , updateItemController)
export default itemRouter