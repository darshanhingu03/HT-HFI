var express = require("express");
var router = express.Router();
const item = require("../controllers/items.controller");
const { verify_auth } = require("../middleware/authMiddleware");

router.get("/user", item.allItemForUser);

router.use(verify_auth);
router.post("/", item.addItems);
router.get("/", item.getItems); // need user id
router.put("/:id", item.updateItems); // need user id
router.delete("/:id", item.deleteItems); // need user id

module.exports = router;
