const router = require("express").Router();
const clientRoutes = require("./client");
const petRoutes = require("./pet");
const medRecRoutes = require("./medRecords");
const userRoutes = require("./user");

// Book routes /api/books*
router.use("/client", clientRoutes);

router.use("/pet", petRoutes);

router.use("/medRecords", medRecRoutes);

// User routes /api/user*
router.use("/user", userRoutes);

module.exports = router;
