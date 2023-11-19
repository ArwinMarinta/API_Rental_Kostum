const KategoriModels = require("../models/kategori.js");

const getAllKategori = async (req, res) => {
  try {
    const [data] = await KategoriModels.getAllKategori();
    const totalResults = data[0].reduce((total) => {
      return total + 1;
    }, 0);
    res.json({
      message: "SUCCESS",
      total_rental: totalResults,
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Server error",
    });
  }
};

//masih error
const creatKategori = async (req, res) => {
  const { body } = req;
  try {
    await KategoriModels.createKategori(body);
    res.json({
      status: "SUCCESS",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      status_message: "false",
      message: "Server Error",
    });
  }
};
const updateKategori = async (req, res) => {
  const { idKat } = req.params;
  const { body } = req;

  try {
    const checkID = await KategoriModels.getAllKategoriByID(idKat);
    if (checkID[0][0].length === 0) {
      return res.status(404).json({
        status_message: "false",
        message: "Data not found",
      });
    }
    await KategoriModels.updateKategori(body, idKat);
    res.json({
      status_message: "SUCCESS",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      status_message: "false",
      message: "Server Error",
      detail: err.message,
    });
  }
};
const deleteKategori = async (req, res) => {
  const { idKat } = req.params;
  try {
    const checkId = await KategoriModels.getAllKategoriByID(idKat);
    if (checkId[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await KategoriModels.deleteKategori(idKat);
    res.json({
      status_message: "SUCCESS",
      data: null,
    });
  } catch (err) {
    res.json({
      status_message: "false",
      message: "Server Error",
    });
  }
};

const getAllKategoriByID = async (req, res) => {
  const { idKat } = req.params;

  try {
    const [data] = await KategoriModels.getAllKategoriByID(idKat);

    if (data && data[0] && data[0][0]) {
      res.json({
        message: "SUCCESS",
        data: data[0],
      });
    } else {
      res.status(404).json({
        status: "false",
        message: "Data not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllKategori,
  creatKategori,
  updateKategori,
  deleteKategori,
  getAllKategoriByID,
};
