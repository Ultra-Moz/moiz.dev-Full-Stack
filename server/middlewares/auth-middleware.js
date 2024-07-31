const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  if (!token) {
    return res
      .status(401)
      .send({ message: "Unauthorized HTTP request. there is no token" });
  }
  const jwtToken = token.replace("Bearer", "").trim();
  try {
    const isVerified = jwt.verify(
      jwtToken,
      process.env.JWT_SECRET_KEY,
      (a, b) => {
        console.log(a, b);
      }
    );
    console.log(jwtToken);
    const userData = await User.findOne({ email: isVerified.email }).select({
      password: 0,
    });

    req.user = userData;
    req.token = token;
    req.userID = userData._id;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
};

module.exports = authMiddleware;
