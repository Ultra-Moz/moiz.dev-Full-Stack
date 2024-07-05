const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (err) {
    const error = {
      statusError: 422,
      message: "Fill the form properly",
      extraDetails: err.errors[0].message,
    };
    next(error);
  }
};

module.exports = validate;
