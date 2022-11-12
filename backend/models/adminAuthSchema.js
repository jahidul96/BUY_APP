const mongoose = require("mongoose");

const sellerAuthSchema = new mongoose.Schema(
  {
    shopname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profileImage: String,
    categorie: {
      type: String,
      required: true,
    },
    notification: [Array],
    newNotification: {
      type: Boolean,
      default: false,
    },
    totalSales: {
      type: Number,
      default: 0,
    },
    saleHistory: [Array],
    totalRating: [Array],
    totalSaleAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const SellerAuth = mongoose.model("Sellerauth", sellerAuthSchema);

module.exports = SellerAuth;
