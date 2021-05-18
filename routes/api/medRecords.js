const router = require("express").Router();
const medRecControllerroller = require("../../controllers/medRecController");

// Matches with "/api/books"
router.route("/")
  .get(medRecControllerroller.findAll)
  .post(medRecControllerroller.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(medRecControllerroller.findById)
  .put(medRecControllerroller.update)
  .delete(medRecControllerroller.remove);

module.exports = router;
