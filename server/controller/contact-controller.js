const Contact = require("../models/contact-model");

const contactController = async (req, res) => {
  try {
    const { username, email, message } = req.body;
    await Contact.create({ username, email, message });
    return res.status(200).json({ msg: "Message sent sucessfully" });
  } catch (error) {
    return res.status(500).send("Internal server error");
  }
};

module.exports = contactController;
