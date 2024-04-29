//@desc Get all contacts
//@route GET /api/contacts
//@acess public
const getContacts = (req,res) => {
    res.status(200).json({msg :"get all contacts"});
}

//@desc Create new contacts
//@route POST /api/contacts
//@acess public
const createContact = (req,res) => {
    console.log("the req body is :",req.body);
    res.status(201).json({msg :"Contact created"});
};

//@desc Get contact
//@route GET /api/contacts/:id
//@acess public
const getContactwithID = (req,res) => {
    res.status(200).json({msg:`contact for ${req.params.id}`})
};

//@desc Update contact
//@route PUT /api/contacts
//@acess public
const updateContact = (req,res) => {
    res.json({msg :`Contact updated with id ${req.params.id}`})
};

//@desc Delete contact
//@route DELETE /api/contacts
//@acess public
const deleteContact = (req,res) => {
    res.json({msg :`Contact deleted with ${req.params.id}`})
};

module.exports = {getContacts , createContact, getContactwithID, updateContact, deleteContact};