const KostumModels = require("../models/kostum.js");

const getAllKostum = async (req, res) => {
  try {
    const [data] = await KostumModels.getAllKostum();
    res.json({
      message: "SUCCESS",
      data: data[0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const createNewKostum = async (req, res) => {
  const { body } = req;
  try {
    await KostumModels.createNewKostum(body);
    res.json({
      message: "SUCCESS",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateKostum = async (req, res) => {
  const { idKostum } = req.params;
  const { body } = req;
  try {
    await KostumModels.updateKostum(body, idKostum);
    res.json({
      message: "UPDATE RENTAL SUCCES",
      data: body,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteKostum = async (req, res) => {
  const { idKostum } = req.params;
  try {
    await KostumModels.deleteKostum(idKostum);
    res.json({
      message: "SUCCESS",
      data: null,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getKostumById = async (req, res) => {
  const { idKostum } = req.params;
  try {
    const [data] = await KostumModels.getKostumById(idKostum);
    res.json({
      //   message: "SUCCES",
      data: data[0][0],
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  getAllKostum,
  createNewKostum,
  updateKostum,
  deleteKostum,
  getKostumById,
};
