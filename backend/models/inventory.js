const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true
    },
    productName:{
        type:String,
        required:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        required:true,
    },
    availability:{
        type:String,
        required:true,
    },
    size:{
        type:String,
        required:true,
    },
    subcategory:{
        type:String,
        required:true
    }
});

const Inventory = mongoose.model('Inventory',inventorySchema);

module.exports = Inventory;