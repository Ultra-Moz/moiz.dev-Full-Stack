const Service = require("../models/service-model");

const serviceController = async (req, res) => {
  try {
    const response = await Service.find();
    if (!response) {
      return res.status(404).send("No services found");
    }
    res.status(200).send({ msg: response });
  } catch (error) {
    console.log(`services ${error}`);
  }
};

module.exports = serviceController;
