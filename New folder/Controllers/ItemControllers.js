import itemModel from "../models/ItemsModels.js"

const addItem = async(req , res) => {
    const body =req.body
    try {        
        const createItem =await itemModel.create(body)
        res.status(201).json({
          message : "Item Added Successfully",
          data : createItem
        })
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }   
}

const getAllItems = async(req , res) => {
    const allItems = await itemModel.find()
    res.json({
        message : "Successfully got All Items",
        data : allItems
    })
}

const changeItemStatus = async(req , res) => {
    try {
       const itemId = req.params.id
       const item = await itemModel.findById(itemId)
    
       const updatedStatus = {
         isAvailable : !item.isAvailable
       }
       const updateStatus = await itemModel.findByIdAndUpdate(itemId , updatedStatus , {new : true})

       res.json({
           message : "Successfully Updated Status",
           data : updateStatus
       }) 
    } catch (error) {
        res.status(500).json({
            message : "something went wrong"
        })
    }
}



const deleteItemController = async(req , res) => {
    try {
       const delId = req.params.id
       const deletedItem = await itemModel.findByIdAndDelete(delId)
       res.status(200).json({
          message : "deleted Item Successfully "
       }) 
    } catch (error) {
        res.status(500).json({
            message : "something went wrong"
        })
    }
    
}
const updateItemController = async(req , res) => {
    
    try {
       const itemId = req.params.id
       const body = req.body
    //    res.json({
    //     message : "got It",
    //     data : body
    //    })
       const updatedItem = await itemModel.findByIdAndUpdate(itemId , body , {new : true})

       if (!updatedItem) {
         return res.status(404).json({
          message: "Item not found",
         });
        }

       res.status(201).json({
        message : "Successfully updated Item ",
        data : updatedItem
       }) 
    } catch (error) {
        res.status(500).json({
            message : "Something went wrong"
        })
    }
    
}

export {
    addItem,
    getAllItems,
    changeItemStatus,
    deleteItemController,
    updateItemController
}