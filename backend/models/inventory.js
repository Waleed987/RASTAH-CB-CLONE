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
    }
});

const Inventory = new mongoose.model('Inventory',inventorySchema);

module.exports = Inventory;