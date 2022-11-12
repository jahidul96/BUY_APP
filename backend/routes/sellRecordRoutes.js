const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  res.send("this is Record page!!!");
});

module.exports = router;
