const express = require("express");
const dotenv = require("dotenv").config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/api/contacts" , (req,res) => {
    res.json({msg :"get all contacts"});
})

app.listen(port , () =>{
    console.log(`Server is up and running on ${port}`);
});