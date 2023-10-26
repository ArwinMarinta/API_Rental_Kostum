const express = require("express");
const kategoriKontroller = require("../controller/kategori.js");
const checkMiddleware = require("../middleware/checkBodyKategori.js");
const router = express.Router();

router.post("/", checkMiddleware, kategoriKontroller.creatKategori);
router.get("/", kategoriKontroller.getAllKategori);
router.get("/:idKat", kategoriKontroller.getAllKategoriByID);
router.delete("/:idKat", kategoriKontroller.deleteKategori);
router.patch("/:idKat", checkMiddleware, kategoriKontroller.updateKategori);

module.exports = router;
