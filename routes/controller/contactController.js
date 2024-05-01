const asyncHandler = require("express-async-handler");
//@desc Get all contacts
//@route GET /api/contacts
//@acess public
const getContacts = asyncHandler(async (req,res) => {
    res.status(200).json({msg :"get all contacts"});
});

//@desc Create new contacts
//@route POST /api/contacts
//@acess public
const createContact = asyncHandler(async (req,res) => {
    // console.log("the req body is :",req.body);
    const {email, name, phone} = req.body;
    if(!email || !name || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    res.status(201).json({msg :"Contact created"});
});

//@desc Get contact
//@route GET /api/contacts/:id
//@acess public
const getContactwithID = asyncHandler(async (req,res) => {
    res.status(200).json({msg:`contact for ${req.params.id}`})
});

//@desc Update contact
//@route PUT /api/contacts
//@acess public
const updateContact = asyncHandler(async (req,res) => {
    res.json({msg :`Contact updated with id ${req.params.id}`})
});

//@desc Delete contact
//@route DELETE /api/contacts
//@acess public
const deleteContact = asyncHandler(async (req,res) => {
    res.json({msg :`Contact deleted with ${req.params.id}`})
});

module.exports = {getContacts , createContact, getContactwithID, updateContact, deleteContact};