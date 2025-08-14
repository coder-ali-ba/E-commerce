import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  itemDesc: {
    type: String,
    required: true,
  },
  itemDetails: {
    type: String,
    required: true,
  },
  itemPrice: {
    type: String, 
    required: true,
  },
  isAvailable : {
    type : Boolean,
    default : false
  },
  image :{
     type : String
  }
}, { timestamps: true });


const itemModel = mongoose.model("items" , itemSchema)
export default itemModel