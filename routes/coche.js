const express = require("express");
const cocheController = require("../controllers/cocheController");

const router = express.Router();

router.get("/", cocheController.getCoches);
router.get("/:id", cocheController.getCocheById);

module.exports = router;
