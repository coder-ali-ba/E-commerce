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

export {
    addItem
}