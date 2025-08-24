const User = require('../models/User');
const registerUser = async(req , res)=>{
    try {
        const {username, email,password,isAdmin} = req.body;
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(500).json({msg : "User already Exists"});
        }
        const newUser = await User.create({username,email,password,isAdmin});
        console.log("User created successfully" + newUser);
        res.status(201).json({msg: "User created successfully", user: newUser});
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: "Error creating user", error: error.message});
    }
}

module.exports = registerUser;