const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const userRoute = require("./routers/user.routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("<p>Hello from server</p>");
});

app.use("/auth/v2/user", userRoute);

module.exports = app;
