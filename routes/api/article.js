const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.post("/article", articlesController.create);

// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);

module.exports = router;
