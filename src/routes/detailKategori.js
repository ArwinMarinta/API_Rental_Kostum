const express = require("express");
const detailKategoriController = require("../controller/detailKategori");
const checkMiddleware = require("../middleware/checkBodyDetailKategori");
const router = express.Router();

router.post(
  "/",
  checkMiddleware,
  detailKategoriController.createNewDetailKategori
);
router.patch(
  "/:idDetails",
  checkMiddleware,
  detailKategoriController.updateDetailKategori
);
router.get("/", detailKategoriController.getAllDetailKategori);
router.get("/:idDetails", detailKategoriController.getDetailKategoriByID);
router.delete("/:idDetails", detailKategoriController.deleteDetailKategori);

module.exports = router;

// [
//   {
//     nama_rental: "banjaru.cosrent",
//     detail: [
//       {
//         kategori_kostum: "Genshin Impact",
//         nama_kostum: ["ningguang", "hutao"],
//       },
//     ],
//   },
//   {
//     nama_rental: "hika rental",
//     detail: [
//       {
//         kategori_kostum: "Genshin Impact",
//         nama_kostum: ["ningguang", "hutao"],
//       },
//       {
//         kategori_kostum: "hongkai",
//         nama_kostum: ["March 7th"],
//       },
//     ],
//   },
//   {
//     nama_rental: "hisaka",
//     detail: [
//       {
//         kategori_kostum: "Genshin Impact",
//         nama_kostum: ["ningguang", "hutao"],
//       },
//       {
//         kategori_kostum: "hongkai",
//         nama_kostum: ["March 7th"],
//       },
//       {
//         kategori_kostum: "mobile legend",
//         nama_kostum: ["angela", "Nana"],
//       },
//     ],
//   },
// ];
