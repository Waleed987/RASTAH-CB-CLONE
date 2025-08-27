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

const googleLogin = async(req,res)=>{
    try {
        console.log(req.body);
        const {email, name, picture, googleId} = req.body;
        
        // Check if user exists with this email
        let user = await User.findOne({email});
        
        if(!user){
            // Create new user if they don't exist
            user = await User.create({
                username: name,
                email: email,
                googleId: googleId,
                isAdmin: false,
                // Set a default password for Google users (you might want to handle this differently)
                password: 'google-auth-' + Date.now()
            });
            console.log("Google user created successfully:", user);
        } else {
            // Update existing user with Google ID if not already set
            if(!user.googleId){
                user.googleId = googleId;
                await user.save();
            }
            console.log("Google user logged in:", user);
        }
        
        // Generate token and return response
        return res.status(200).json({
            msg: "Google login successful",
            token: await user.generateToken(),
            isAdmin: user.isAdmin || false
        });
        
    } catch (error) {
        console.log("Error in Google login:", error);
        return res.status(500).json({msg: "Error in Google login", error: error.message});
    }
}

module.exports = {registerUser,loginUser,googleLogin};