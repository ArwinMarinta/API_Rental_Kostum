const dbPool = require("../config/database.js");

const getAllKostum = () => {
  const SQLQuery = "CALL getAllKostum";
  return dbPool.execute(SQLQuery);
};
const createNewKostum = (body) => {
  const SQLQuery = `CALL addKostum ('${body.id_kostum}', '${body.id_rental}', '${body.nama_kostum}', '${body.harga}', '${body.ukuran}', '${body.durasi}', '${body.keterangan}')`;
  return dbPool.execute(SQLQuery);
};
const updateKostum = (body) => {
  const SQLQuery = `CALL UpdateKostum('${body.id_kostum}', '${body.id_rental}', '${body.nama_kostum}', '${body.harga}', '${body.ukuran}', '${body.durasi}', '${body.keterangan}')`;
  return dbPool.execute(SQLQuery);
};
const deleteKostum = (idKostum) => {
  const SQLQuery = `CALL DeleteKostum('${idKostum}')`;
  return dbPool.execute(SQLQuery);
};
const getKostumById = (idKostum) => {
  const SQLQuery = `CALL getKostumByID('${idKostum}')`;
  return dbPool.execute(SQLQuery);
};

const getKostumByQueryDB = (id_rental, nama_kostum, ukuran) => {
  let SQLQuery;
  if (id_rental) {
    SQLQuery = `CALL GetCostumeByQuery(${null}, '${id_rental}', ${null}, ${null}, ${null}, ${null}, ${null})`;
  } else if (nama_kostum) {
    SQLQuery = `CALL GetCostumeByQuery(${null}, ${null}, '${nama_kostum}', ${null}, ${null}, ${null}, ${null})`;
  } else if (ukuran) {
    SQLQuery = `CALL GetCostumeByQuery(${null}, ${null}, ${null}, ${null}, '${ukuran}', ${null}, ${null})`;
  }

  return dbPool.execute(SQLQuery);
};

module.exports = {
  getAllKostum,
  createNewKostum,
  updateKostum,
  deleteKostum,
  getKostumById,
  getKostumByQueryDB,
};
