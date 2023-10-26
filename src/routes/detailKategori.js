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
