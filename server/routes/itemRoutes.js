const express = require("express");

const router = express.Router();

const auth = require("../middleware/auth");
const itemController = require("../controllers/itemController");

router.get("/items", itemController.getItems);
router.post("/items", auth, itemController.createItem);
router.put("/items/:id", auth, itemController.markFound);
router.delete("/items/:id", auth, itemController.deleteItem);
router.get("/my-items", auth, itemController.getMyItems);

module.exports = router;