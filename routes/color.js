const express = require("express");
const colorController = require("../controllers/colorController");

const router = express.Router();

router.get("/", colorController.getColors);
router.get("/:id", colorController.getColorById);

module.exports = router;
