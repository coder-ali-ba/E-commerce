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
    res.json({
        message : "got it"
    })
}

export {
    addItem,
    getAllItems,
    changeItemStatus
}