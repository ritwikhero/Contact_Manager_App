const express = require("express");
const router = express.Router();


//Get all contact
router.route("/").get((req,res) => {
    res.json({msg :"get all contacts"});
});

//Create new contact
router.route("/").post((req,res) => {
    res.json({msg :"Contact created"});
});

//Get contact from id
router.route("/").get((req,res) => {
    res.json({msg:`contact for ${req.params.id}`})
})

//Update present contact
router.route("/:id").post((req,res) => {
    res.json({msg :`Update for contact ${req.params.id}`});
});

//Delete contact
router.route("/:id").delete((req,res) => {
    res.json({msg :`Contact deleted with ${req.params.id}`});
});

module.exports = router;