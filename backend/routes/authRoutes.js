const express = require("express");

const router = express.Router();

router.get("/auth/register", async (req, res, next) => {
  res.send("this is register page!!!");
});

module.exports = router;
