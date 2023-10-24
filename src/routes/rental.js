const express = require("express");
const userControllers = require("../controller/rental.js");
const checkBody = require("../middleware/checkBodyRental.js");
const router = express.Router();

router.post("/", checkBody, userControllers.createNewRental);
router.get("/", userControllers.getAllRental);
router.get("/:idRentals", userControllers.getRentalById);
router.patch("/:idRentals", checkBody, userControllers.updateRentals);
router.delete("/:idRentals", userControllers.deleteRentals);

module.exports = router;
