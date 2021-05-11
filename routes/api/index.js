const router = require("express").Router();
const bookRoutes = require("./books");
const userRoutes = require("./user");

// Book routes /api/books*
router.use("/books", bookRoutes);
// User routes /api/user*
router.use("/user", userRoutes);

module.exports = router;
