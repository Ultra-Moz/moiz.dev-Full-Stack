const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//home page logic
const home = async (req, res) => {
  try {
    return res.status(200).send("Welcome to the home page!");
  } catch (error) {
    return res.status(400).send({ msg: "Page not found" });
  }
};

//register page logic
const register = async (req, res) => {
  try {
    const { username, email, password, phone } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).send("User already exists");
    }
    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
    });

    res.status(201).json({
      msg: "Registration successful",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).send({ msg: "internal server error" });
  }
};

//login page logic
const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    userExists = await User.findOne({ email });
    if (!userExists) {
      return res.status(401).send({ msg: "Email not signed up" });
    }
    const isValidPass = await userExists.comparePassword(password);

    if (isValidPass) {
      res.status(200).send({
        msg: "Login succesful",
        token: await userExists.generateToken(),
        userId: userExists._id.toString(),
      });
    } else {
      const error = new Error("Invalid Credentials");
      error.statusError = 401;
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const user = async (req, res) => {
  try {
    const userData = req.user;

    return res.status(200).send(userData);
  } catch (error) {
    return res.status(500).send("Error from user-controller", error);
  }
};

module.exports = { home, register, login, user };
