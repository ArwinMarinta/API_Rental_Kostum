const dbPool = require("../config/database.js");

const getAllKategori = () => {
  const SQLQuery = "CALL getAllKategoriKostum()";
  return dbPool.execute(SQLQuery);
};
const createKategori = (body) => {
  const SQLQuery = `CALL addKategoriKostum ('${body.id_kategori}','${body.kategori_kostum}')`;
  return dbPool.execute(SQLQuery);
};
const updateKategori = (body) => {
  const SQLQuery = `CALL updateKategoriKostum('${body.id_kategori}','${body.kategori_kostum}')`;
  return dbPool.execute(SQLQuery);
};
const deleteKategori = (idKat) => {
  const SQLQuery = `CALL deleteKategoriKostum('${idKat}')`;
  return dbPool.execute(SQLQuery);
};
const getAllKategoriByID = (idKat) => {
  const SQLQuery = `CALL getKategoriKostumByID('${idKat}')`;
  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllKategori,
  createKategori,
  updateKategori,
  deleteKategori,
  getAllKategoriByID,
};
