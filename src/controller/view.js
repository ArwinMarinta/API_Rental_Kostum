const detailView = require("../models/view.js");

const getView = async (req, res) => {
  try {
    const [data] = await detailView.viewDB();
    res.json({
      status: "SUCCES",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "False",
      status_Message: "Server Error",
    });
  }
};
const getVieWRental = async (req, res) => {
  try {
    const [data] = await detailView.viewRental();
    res.json({
      status: "SUCCES",
      data: data,
    });
  } catch (err) {
    res.status(500).json({
      status: "False",
      status_Message: "Server Error",
    });
  }
};

module.exports = {
  getView,
  getVieWRental,
};
