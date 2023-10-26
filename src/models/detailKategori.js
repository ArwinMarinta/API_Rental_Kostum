const dbPool = require("../config/database.js");

const getAllDetailKategori = () => {
  const SQLQuery = "CALL getAllDetailKategori()";
  return dbPool.execute(SQLQuery);
};
const createNewDetailKategori = (body) => {
  const SQLQuery = `CALL addDetailKategori('${body.id_kategori_kostum}', '${body.id_kategori}', '${body.id_kostum}')`;
  return dbPool.execute(SQLQuery);
};
const updateDetailKategori = (body) => {
  const SQLQuery = `CALL updateDetailKategori('${body.id_kategori_kostum}', '${body.id_kategori}', '${body.id_kostum}')`;
  return dbPool.execute(SQLQuery);
};
const deleteDetailKategori = (idDetails) => {
  const SQLQuery = `CALL deleteDetailKategori('${idDetails}')`;
  return dbPool.execute(SQLQuery);
};
const getDetailKategoriByID = (idDetails) => {
  const SQLQuery = `CALL getDetailKostumByID('${idDetails}')`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllDetailKategori,
  createNewDetailKategori,
  updateDetailKategori,
  deleteDetailKategori,
  getDetailKategoriByID,
};
