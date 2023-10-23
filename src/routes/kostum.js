const express = require("express");
const kostumControllers = require("../controller/kostum.js");
const router = express.Router();

router.post("/", kostumControllers.createNewKostum);
router.get("/", kostumControllers.getAllKostum);
router.get("/:idKostum", kostumControllers.getKostumById);
router.patch("/:idKostum", kostumControllers.updateKostum);
router.delete("/:idKostum", kostumControllers.deleteKostum);

module.exports = router;
