import express from "express";
import "dotenv/config";
import cors from "cors";
import userRoute from "./routers/user.routes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("<p>Hello from server</p>");
});

app.use("/auth/v2/user", userRoute);

export default app;
