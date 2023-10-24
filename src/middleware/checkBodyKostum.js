const checkRequestBody = (req, res, next) => {
  const { body } = req;
  if (
    !body.id_kostum ||
    !body.id_rental ||
    !body.nama_kostum ||
    !body.harga ||
    !body.ukuran ||
    !body.durasi ||
    !body.keterangan
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
