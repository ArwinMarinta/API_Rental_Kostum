const express = require("express");
const kostumControllers = require("../controller/kostum.js");
const checkBody = require("../middleware/checkBodyKostum.js");
const checkParams = require("../middleware/checkParam.js");
const router = express.Router();

router.post("/", checkBody, kostumControllers.createNewKostum);
router.get("/", kostumControllers.getAllKostum);
router.get("/src", checkParams, kostumControllers.getKostumByQuery);
router.get("/:idKostum", kostumControllers.getKostumById);
router.patch("/:idKostum", checkBody, kostumControllers.updateKostum);
router.delete("/:idKostum", kostumControllers.deleteKostum);

module.exports = router;
