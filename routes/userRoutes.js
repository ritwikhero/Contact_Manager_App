const express = require("express");
const router = express.Router();

router.post("/register" , (req,res) => {
    res.json({msg : "User registered sucessfully"});
});

router.post("/login" , (req,res) => {
    res.json({msg : "User logged in sucessfully"});
});

router.get("/current" , (req,res) => {
    res.json({msg : "Current user info"});
});

module.exports = router;
