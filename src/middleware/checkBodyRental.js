const checkRequestBody = (req, res, next) => {
  const { body } = req;
  if (
    !body.id_rental ||
    !body.nama_rental ||
    !body.no_telpn ||
    !body.kota ||
    !body.alamat
  ) {
    return res.status(400).json({
      status: "false",
      message: "Data not valid!!",
      data: null,
    });
  }
  next();
};

module.exports = checkRequestBody;
