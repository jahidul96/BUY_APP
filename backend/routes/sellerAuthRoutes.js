const router = require("express").Router();
const SellerAuth = require("../models/adminAuthSchema");

const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.send("seller page!!");
});

router.post("/register", async (req, res, next) => {
  //   const { password, ...others } = req.body;
  if (!req.body.password) {
    return res.status(403).json({
      message: "must add a unique password! to create Account!",
    });
  }
  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  req.body.password = hashedPassword;

  try {
    const findSeller = await SellerAuth.findOne({ email: req.body.email });
    if (findSeller) {
      return res.status(403).json({
        status: "failed",
        message: "user already active!!",
      });
    }
    const seller = new SellerAuth(req.body);
    await seller.save();

    res.status(201).json({
      status: "succes",
      message: "Seller Profile Created Succesfully!",
      user: seller,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const findSeller = await SellerAuth.findOne({ email: email });
    if (!findSeller) {
      return res.status(403).json({
        message: "Wrong Info!",
      });
    }
    const matchPassword = await bcrypt.compare(password, findSeller.password);
    if (!matchPassword) {
      return res.status(403).json({
        message: "Wrong Info!",
      });
    }
    res.status(200).json({
      status: "succes",
      message: "Login succefull!",
      user: findSeller,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
