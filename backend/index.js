const express = require("express");
const { dbConnection } = require("./db/db");

require("dotenv").config();

// imports module
const authHandler = require("./routes/authRoutes");

// app initialize
const app = express();

const port = process.env.PORT || 5000;

// middlewares!!
app.use(express.json());

// router call middlewares!
app.use(authHandler);

// db connecton call
// dbConnection();

app.listen(port, () => console.log(`server is running on port ${port}`));
