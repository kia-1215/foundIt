const mongoose = require("mongoose");
require("dotenv").config();
const bcrypt = require("bcrypt");

const User = require("./models/User");
const Item = require("./models/Item");

const express = require("express");
const cors = require("cors");

const app = express();

const auth = require("./middleware/auth");

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("FoundIt Backend is Running!");
});

const authRoutes = require("./routes/authRoutes");

app.use(authRoutes);

const PORT = 3001;

const itemRoutes = require("./routes/itemRoutes");
app.use(itemRoutes);

const jwt = require("jsonwebtoken");

mongoose 
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("MONGODB CONNECTED");
})
.catch((err) => {
    console.log(err);
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});