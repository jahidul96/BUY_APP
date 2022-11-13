const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    inStock: {
      type: Number,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
    },
    productQuality: {
      type: String,
      required: true,
    },
    categorie: {
      type: String,
      required: true,
    },
    featuredImg: Array,
    tags: Array,
    click: {
      type: Number,
      default: 0,
    },
    rating: Array,
    likes: Array,
    comments: Array,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sellerauth",
    },
    totalSell: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
