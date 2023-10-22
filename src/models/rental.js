const dbPool = require("../config/database.js");

const getAllRental = () => {
  const SQLQuery = "SELECT * FROM rental";
  return dbPool.execute(SQLQuery);
};

const createNewRental = (body) => {
  const SQLQuery = `CALL addRental('${body.id_rental}', '${body.nama_rental}', '${body.no_telpn}', '${body.kota}', '${body.alamat}')`;
  return dbPool.execute(SQLQuery);
};

const updateRental = (body) => {
  const SQLQuery = `CALL updateRental('${body.id_rental}', '${body.nama_rental}', '${body.no_telpn}', '${body.kota}', '${body.alamat}')`;
  return dbPool.execute(SQLQuery);
};

const deleteRental = (idRentals) => {
  const SQLQuery = `CALL deleteRental('${idRentals}')`;
  return dbPool.execute(SQLQuery);
};

const getRentalById = (idRentals) => {
  const SQLQuery = `CALL getRentalById('${idRentals}')`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllRental,
  createNewRental,
  updateRental,
  deleteRental,
  getRentalById,
};
