const mongoose = require('mongoose');
const Inventory = require('../models/inventory');

const insertItem = async (req,res)=>{
    try {

        const {productName , price,imageUrl, gender, availability, size, subcategory} = req.body;
        const newItem = await Inventory.create({productName , price,imageUrl, gender, availability, size, subcategory});
        if(newItem){
            res.status(200).json({message:"item created",item:newItem});
        }
    } catch (error) {
        res.status(500).json({Error : "Error inserting item"});
    }
}

const getItem = async(req,res)=>{
    try {
        const productName = req.params.productName;
        const item = await Inventory.findOne({productName});
        
        if (!item) {
            return res.status(404).json({Error: "Item not found"});
        }
        
        res.status(200).json({itemsDetail: item});
    } catch (error) {
        console.log("Error fetching item:", error);
        res.status(500).json({Error: "Error fetching item"});
    }
}

const deleteItem = async(req,res)=>{
    try {
        const productName = req.params.productName;
        const item = await Inventory.deleteOne({productName});
        if(item.deletedCount===0){
            return res.status(300).json({msg : "item not found"});
        }
        res.status(200).json({msg:"item deleted successfully"});
    } catch (error) {
        res.status(500).json("Error deleting item");
    }
}

const getAllItems = async(req , res)=>{
    try {
        const list = await Inventory.find({});
        if(!list || list.length === 0){
           return res.status(404).json({msg:"No items found"});
        }
        res.status(200).json({inventoryItems: list});
    } catch (error) {
        console.log("Error fetching items:", error);
        res.status(500).json({Error: "Error fetching items"});
    }
}


module.exports = {insertItem,getItem,deleteItem,getAllItems};