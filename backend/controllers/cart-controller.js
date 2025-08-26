const { default: mongoose } = require('mongoose');
const cart = require('../models/cart');

const insertItems = async(req , res)=>{
    try {
        const {userId,items,totalPrice,createdAt,updatedAt} = req.body;
        const itemExists = await cart.findOne({userId,items,totalPrice,createdAt,updatedAt});
        if(itemExists){
            return res.status(300).json({msg:"Items already ordered"});
        }
        const newItem = await cart.create( {userId,items,totalPrice,createdAt,updatedAt});
        res.status(200).json({msg:"item inserted in cart successfully",itemDetails:newItem});
    } catch (error) {
        res.status(500).json("Error inserting items into Cart");
    }
}

const getCartItem = async(req,res)=>{
    const {userId} = req.body;
    const cartExists = await cart.findOne({userId});
    if(!userExists){
        return res.status(500).json({msg:"Cart doesnt Exist"});
    }
    res.status(200).json({cartItems:cartExists});
}

module.exports = {insertItems,getCartItem};