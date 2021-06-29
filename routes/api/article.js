const router = require("express").Router();
const articleController = require("../../controllers/ArticleController");

router.get("/", articleController.findAll)
router.post("/", articleController.create)


module.exports = router;