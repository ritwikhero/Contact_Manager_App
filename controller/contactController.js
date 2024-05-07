const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel")
//@desc Get all contacts
//@route GET /api/contacts
//@acess private
const getContacts = asyncHandler(async (req,res) => {
    const contacts = await Contact.find({user_id : req.user.id});
    res.status(200).json(contacts);
});

//@desc Create new contacts
//@route POST /api/contacts
//@acess private
const createContact = asyncHandler(async (req,res) => {
    // console.log("the req body is :",req.body);
    const {email, name, phone} = req.body;
    if(!email || !name || !phone){
        res.status(400);
        throw new Error("All fields are mandatory");
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id : req.user.id,
    });
    res.status(201).json(contact);
});

//@desc Get contact
//@route GET /api/contacts/:id
//@acess private
const getContactwithID = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    res.status(200).json(contact);
});

//@desc Update contact
//@route PUT /api/contacts/:id
//@acess private
const updateContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error("User don't have the permission to update other user contacts")
    }
    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new : true}
    );
    res.json(updatedContact);
});

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@acess private
const deleteContact = asyncHandler(async (req,res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact not Found");
    }
    if(contact.user_id.toString() !== req.user.id){
        res.status(404);
        throw new Error("User don't have the permission to delete other user contacts")
    }
    await Contact.deleteOne({_id : req.params.id});
    res.status(200).json(contact);
});

module.exports = {getContacts , createContact, getContactwithID, updateContact, deleteContact};