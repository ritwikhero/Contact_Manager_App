const asyncHandler = require("express-async-handler");
//@desc Register a user
//@route POST api/user/register
//@access Public
const registerUser = asyncHandler(async(req,res) => {
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