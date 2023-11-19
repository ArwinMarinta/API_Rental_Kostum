const dbPool = require("../config/database.js");

const viewDB = () => {
  const SQLQuery = "SELECT * FROM rentalDetail";
  return dbPool.execute(SQLQuery);
};

const viewRental = () => {
  const SQLQuery = "select * from rentalsummary";
  return dbPool.execute(SQLQuery);
};

module.exports = {
  viewDB,
  viewRental,
};
