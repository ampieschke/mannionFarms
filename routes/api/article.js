const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.get("/", articleController.findAll)
router.post("/", articleController.create)

// router
//   .route("/:id")
//   .get(articleController.findById)
//   .put(articleController.update)
//   .delete(articleController.remove);


module.exports = router;