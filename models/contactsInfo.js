const { Schema, model, models } = require("mongoose");

const contactsSchema = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  designation: {
    type: String,
  },
});

const contactsinfo = model.contactsinfo || model("carsinfos", contactsSchema);

module.exports = contactsinfo;
