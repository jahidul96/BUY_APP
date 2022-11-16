const express = require("express");
const router = express.Router();
const User = require("../models/userSchema");

const bcrypt = require("bcrypt");

router.post("/register", async (req, res, next) => {
  // console.log(req.body);

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  req.body.password = hashedPassword;

  try {
    const findSeller = await User.findOne({ email: req.body.email });
    if (findSeller) {
      return res.status(403).json({
        status: "failed",
        message: "user already active!!",
      });
    }
    const user = new User(req.body);
    await user.save();

    user.password = undefined;

    res.status(201).json({
      status: "succes",
      message: "User Profile Created Succesfully!",
      user,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const findSeller = await User.findOne({ email: email });
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

    findSeller.password = undefined;
    res.status(200).json({
      status: "succes",
      message: "Login succefull!",
      user: findSeller,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/favorites/:id", async (req, res, next) => {
  const id = req.params.id;

  try {
    const user = await User.findByIdAndUpdate(
      { _id: id },
      {
        $set: {
          favorites: req.body,
        },
      },
      { new: true }
    );

    res.status(201).json({
      status: "succesfull",
      user,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
