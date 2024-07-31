const adminMiddleware = async (req, res, next) => {
  try {
    isAdmin = req.user.isAdmin;
    if (!isAdmin) {
      return res
        .status(402)
        .send({ message: "Access Denied. User is not an admin" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = adminMiddleware;
