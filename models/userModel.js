const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username : {
        type : String,
        required : [true,"Username required"]
    },
    email :{
        type : String,
        required : [true, "Email ID is mandatory"],
        unique : [true, "Email already exists"]
    },
    password : {
        type : String,
        required : [true, "User password required"]
    }
})

module.exports = mongoose.model("User",userSchema);