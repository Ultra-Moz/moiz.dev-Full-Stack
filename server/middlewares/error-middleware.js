const errorMiddleware = (err, req, res, next) => {
  statusError = err.statusError || 500;
  message = err.message || "BACKEND ERROR";
  extraDetails = err.extraDetails || "Error from backend";

  return res.status(statusError).json({ message, extraDetails });
};

module.exports = errorMiddleware;
