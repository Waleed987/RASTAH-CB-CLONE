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

const loginUser = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
            return res.status(500).json({msg:"User does not exist"});
        }
        
        if(password!=userExists.password){
            return res.status(500).json({msg:"Password not correct"});
        }
        return res.status(200).json(
            {
                msg:"Login Successful",
                token :await userExists.generateToken(),
                isAdmin: userExists.isAdmin || false
            });
    } catch (error) {
        console.log("Error loging in " + error);
        return res.status(500).json({msg:"Error logging in", error: error.message});
    }
}

module.exports = {registerUser,loginUser};