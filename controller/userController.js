const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcyrpt = require("bcrypt");
//@desc Register a user
//@route POST api/user/register
//@access Public
const registerUser = asyncHandler(async(req,res) => {
    const {username, email, password} = req.body;

    if(!username || !email || !password){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User already exists");
    }

    //Hash Password
    const hashedPassword = await bcyrpt.hash(password, 10);
    console.log("hashedPassword : ",hashedPassword);
    res.json({msg : "User registered sucessfully"});
});

//@desc login user
//@route POST api/user/login
//@access Public
const loginUser = asyncHandler(async(req,res) => {
    res.json({msg : "User logged in sucessfully"});
});

//@desc current user
//@route POST api/user/current
//@access Private
const currentUser = asyncHandler(async(req,res) => {
    res.json({msg : "Current user info"});
});

module.exports = {
    registerUser,
    loginUser,
    currentUser

}