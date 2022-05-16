const express = require("express");
const router = express.Router();

const miniMailController = require("../controllers/miniMailController");

router.post("/mail", miniMailController.createMiniMail);
router.get("/mails", miniMailController.getAllMiniMail);
router.get("/mail/:id", miniMailController.getMiniMail);
router.put("/mail/:id", miniMailController.updateMiniMail);
router.delete("/mail/:id", miniMailController.deleteMiniMail);

module.exports = router;