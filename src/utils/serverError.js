const serverError = (res, err) => {
  return res.status(500).json({
    status: "False",
    status_message: "Server Error",
  });
};

module.exports = { serverError };
