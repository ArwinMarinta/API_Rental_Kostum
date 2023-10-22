const RentalModels = require("../models/rental");

const getAllRental = async (req, res) => {
  try {
    const [data] = await RentalModels.getAllRental();
    res.json({
      message: "SUCCESS",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const createNewRental = async (req, res) => {
  const { body } = req;
  try {
    await RentalModels.createNewRental(body);
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

const updateRentals = async (req, res) => {
  const { idRentals } = req.params;
  const { body } = req;
  try {
    await RentalModels.updateRental(body, idRentals);
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

const deleteRentals = async (req, res) => {
  const { idRentals } = req.params;
  try {
    await RentalModels.deleteRental(idRentals);
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

const getRentalById = async (req, res) => {
  const { idRentals } = req.params;
  try {
    const [data] = await RentalModels.getRentalById(idRentals);
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
  getAllRental,
  createNewRental,
  updateRentals,
  deleteRentals,
  getRentalById,
};
