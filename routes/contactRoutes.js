const express = require("express");
const router = express.Router();
const {getContacts, createContact, getContactwithID, updateContact, deleteContact} = require("../controller/contactController");
const validateToken = require("../middlewares/validateTokenHandler");

//for private routes ., here all routes are private
router.use(validateToken);
//Get all contact
router.route("/").get(getContacts);

//Create new contact
router.route("/").post(createContact);

//Get contact from id
router.route("/:id").get(getContactwithID);

//Update present contact
router.route("/:id").put(updateContact);

//Delete contact
router.route("/:id").delete(deleteContact);

module.exports = router;