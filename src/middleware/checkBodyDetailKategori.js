const checkRequestBody = (req, res, next) => {
  const { body } = req;
  if (!body.id_kategori_kostum || !body.id_kategori || !body.id_kostum) {
    return res.status(400).json({
      status: "false",
      message: "Data not valid!!",
      data: null,
    });
  }
  next();
};

module.exports = checkRequestBody;
