const express = require("express");
const detailViewController = require("../controller/view");
const router = express.Router();

router.get("/", detailViewController.getView);
router.get("/detailRental", detailViewController.getVieWRental);

module.exports = router;
