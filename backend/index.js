const express = require("express");
const { dbConnection } = require("./db/db");

require("dotenv").config();

// imports module
const userHandler = require("./routes/userRoutes");
const sellerAuthHandler = require("./routes/sellerAuthRoutes");
const productHandler = require("./routes/productRoutes");
const recordHandler = require("./routes/sellRecordRoutes");

// app initialize
const app = express();

const port = process.env.PORT || 5000;

// middlewares!!
app.use(express.json());

// router call middlewares!
app.use("/auth", userHandler);
app.use("/seller", sellerAuthHandler);
app.use("/product", productHandler);
app.use("/sellrecord", recordHandler);

app.use((err, req, res, next) => {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({
    status: "failed",
    message: err.message,
  });
});

// db connecton call
dbConnection();

app.listen(port, () => console.log(`server is running on port ${port}`));
