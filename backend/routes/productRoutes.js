const express = require("express");
const router = express.Router();

const Product = require("../models/productSchema");

// get all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Product.find({})
      .populate("postedBy", {
        password: 0,
      })
      .sort({ createdAt: -1 })
      .limit(15);

    res.status(200).json({
      status: "succes",
      totleProducts: products.length,
      products,
    });
  } catch (error) {
    next(error);
  }
});

// post a product
router.post("/addproduct", async (req, res, next) => {
  try {
    const product = new Product(req.body);

    await product.save();

    res.status(201).json({
      status: "succes",
      product,
    });
  } catch (error) {
    next(error);
  }
});

// get a product

router.get("/:id", async (req, res, next) => {
  const id = req.params.id;
  try {
    const product = await Product.findById(id).populate("postedBy", {
      password: 0,
    });

    res.status(200).json({
      status: "succes",
      product,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
