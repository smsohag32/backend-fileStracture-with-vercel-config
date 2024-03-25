const express = require("express");
const router = express.Router();
const {
  getContacts,
  postContact,
} = require("../controllers/contactsController.js");

router.get("/contacts", getContacts);
router.post("/contacts", postContact);

module.exports = router;
