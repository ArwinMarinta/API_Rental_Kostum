const express = require("express");
const userControllers = require("../controller/rental.js");
const router = express.Router();

router.post("/", userControllers.createNewRental);
router.get("/", userControllers.getAllRental);
router.get("/:idRentals", userControllers.getRentalById);
router.patch("/:idRentals", userControllers.updateRentals);
router.delete("/:idRentals", userControllers.deleteRentals);

module.exports = router;
