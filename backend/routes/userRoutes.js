const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

router.get("/auth/register", async (req, res, next) => {
  res.send("this is register page!!!");
});

module.exports = router;
