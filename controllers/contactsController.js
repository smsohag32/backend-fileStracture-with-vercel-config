const contactsinfo = require("../models/contactsInfo.js");

const postContact = async (req, res) => {
  try {
    const newContact = req.body;

    if (newContact) {
      await contactsinfo.create(newContact);
      res.send("Contact added successfully");
    } else {
      res.send("try again, not added contact");
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const getContacts = async (req, res) => {
  try {
    const result = await contactsinfo.find();
    res.send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { postContact, getContacts };
