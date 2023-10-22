const logRequest = (req, res, next) => {
  console.log("log req PATH :", req.path);
  next();
};

module.exports = logRequest;
