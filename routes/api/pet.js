const router = require("express").Router();
const petControllerroller = require("../../controllers/petController");

// Matches with "/api/books"
router.route("/")
  .get(petControllerroller.findAll)
  .post(petControllerroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(petControllerroller.findById)
  .put(petControllerroller.update)
  .delete(petControllerroller.remove);

module.exports = router;
