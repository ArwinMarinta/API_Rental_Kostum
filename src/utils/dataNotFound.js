const dataNotFound = (res) => {
  return res.status(404).json({
    status: "False",
    message: "Data not found",
  });
};

module.exports = { dataNotFound };
