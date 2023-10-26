const detailKategoriModels = require("../models/detailKategori.js");

const getAllDetailKategori = async (req, res) => {
  try {
    const [data] = await detailKategoriModels.getAllDetailKategori();
    const totalResults = data[0].reduce((total) => {
      return total + 1;
    }, 0);

    res.json({
      status: "SUCCESS",
      total_detail_kategori: totalResults,
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({
      Status: "False",
      status_message: "Server Error",
    });
  }
};

const createNewDetailKategori = async (req, res) => {
  const { body } = req;
  try {
    await detailKategoriModels.createNewDetailKategori(body);
    res.json({
      status: "SUCCESS",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      status: "false",
      status_message: "Server Error",
    });
  }
};

const updateDetailKategori = async (req, res) => {
  const { idDetails } = req.params;
  const { body } = req;
  try {
    const checkId = await detailKategoriModels.getDetailKategoriByID(idDetails);
    if (checkId[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await detailKategoriModels.updateDetailKategori(body, idDetails);
    res.json({
      status: "SUCCESS",
      status_message: "Detail kategori berhasil di update",
      data: body,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      status: "False",
      status_message: "Server Error",
    });
  }
};

const deleteDetailKategori = async (req, res) => {
  const { idDetails } = req.params;
  try {
    const checkId = await detailKategoriModels.getDetailKategoriByID(idDetails);
    if (checkId[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        status_message: "Data not found",
      });
    }

    await detailKategoriModels.deleteDetailKategori(idDetails);
    res.json({
      status: "SUCCESS",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      status: "False",
      status_message: "Server Error",
    });
  }
};

const getDetailKategoriByID = async (req, res) => {
  const { idDetails } = req.params;
  try {
    const [data] = await detailKategoriModels.getDetailKategoriByID(idDetails);
    if (data && data[0] && data[0][0]) {
      res.json({
        status: "SUCCESS",
        data: data[0][0],
      });
    } else {
      res.status(404).json({
        status: "false",
        status_message: "Data not found",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "False",
      status_message: "Server Error",
    });
  }
};

module.exports = {
  getAllDetailKategori,
  updateDetailKategori,
  deleteDetailKategori,
  getDetailKategoriByID,
  createNewDetailKategori,
};
