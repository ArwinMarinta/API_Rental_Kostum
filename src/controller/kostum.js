const { json } = require("body-parser");
const KostumModels = require("../models/kostum.js");

const getAllKostum = async (req, res) => {
  try {
    const [data] = await KostumModels.getAllKostum();
    const totalResults = data[0].reduce((total) => {
      return total + 1;
    }, 0);
    res.json({
      message: "SUCCESS",
      total_kostum: totalResults,
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
    res.status(201).json({
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
    const update = await KostumModels.getKostumById(idKostum);
    if (update[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await KostumModels.updateKostum(body, idKostum);
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

const deleteKostum = async (req, res) => {
  const { idKostum } = req.params;
  try {
    const update = await KostumModels.getKostumById(idKostum);
    if (update[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await KostumModels.deleteKostum(idKostum);
    res.json({
      message: "SUCCES",
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
    if (data && data[0] && data[0][0]) {
      res.json({
        message: "SUCCESS",
        data: data[0][0],
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
const getKostumByQuery = async (req, res) => {
  const nama_kostum = req.query.nama_kostum;

  try {
    const [data] = await KostumModels.getKostumByQueryDB(nama_kostum);
    const totalResults = data[0].reduce((total) => {
      return total + 1;
    }, 0);
    if (data.length > 0) {
      res.json({
        message: "SUCCESS",
        total_data: totalResults,
        data: data[0],
      });
    } else {
      res.status(404).json({
        message: "Not found",
      });
    }
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
  getKostumByQuery,
};
