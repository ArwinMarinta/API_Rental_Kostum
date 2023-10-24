const RentalModels = require("../models/rental");

const getAllRental = async (req, res) => {
  try {
    const [data] = await RentalModels.getAllRental();
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
      message: "Server Error",
    });
  }
};

const createNewRental = async (req, res) => {
  // const idRentals = req.params.idRentals;
  const { body } = req;

  try {
    // const update = await RentalModels.getRentalById(idRentals);
    // console.log(update);
    // if (update[0].length === 1) {
    //   return res.status(404).json({
    //     status: "False",
    //     message: "Data already exits",
    //   });
    // }
    await RentalModels.createNewRental(body);
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

const updateRentals = async (req, res) => {
  const { idRentals } = req.params;
  const body = req.body;

  try {
    const update = await RentalModels.getRentalById(idRentals);
    if (update[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await RentalModels.updateRental(body, idRentals);
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

const deleteRentals = async (req, res) => {
  const idRentals = req.params.idRentals;

  try {
    const update = await RentalModels.getRentalById(idRentals);
    if (update[0][0].length === 0) {
      return res.status(404).json({
        status: "False",
        message: "Data not found",
      });
    }
    await RentalModels.deleteRental(idRentals);
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

const getRentalById = async (req, res) => {
  const { idRentals } = req.params;
  try {
    const [data] = await RentalModels.getRentalById(idRentals);
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

module.exports = {
  getAllRental,
  createNewRental,
  updateRentals,
  deleteRentals,
  getRentalById,
};
