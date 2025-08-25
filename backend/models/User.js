const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean
    }
});

UserSchema.methods.generateToken = function(){
    try {
        return jwt.sign({
            userId: this._id.toString(),
            email: this.email ,
            isAdmin: this.isAdmin    
        },
        "Testkey",
        {
            expiresIn:"2h",
        }
    )
    } catch (error) {
        console.log(error);
        return null;
    }
}

const User = new mongoose.model("User", UserSchema);

module.exports = User;