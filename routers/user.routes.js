import express from "express";
import { body } from "express-validator";
import {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} from "../controllers/user.controller.js";
import { authUser } from "../middleware/auth.middleware.js";

const router = express.Router();

router
  .route("/register")
  .post(
    [
      body("email").trim().isEmail().withMessage("Email required!"),
      body("fullName.firstname")
        .isLength({ min: 3 })
        .isString()
        .withMessage("Invalid! 🛑"),
      body("password")
        .isLength({ min: 6 })
        .withMessage("Minimum length 6 characters! 👈"),
    ],
    registerUser
  );

router
  .route("/login")
  .post(
    [
      body("email").isEmail().withMessage("Email is required!"),
      body("password").isLength({ min: 6 }).withMessage("Password required!"),
    ],
    loginUser
  );

router.route("/profile").get(authUser, getUserProfile);
router.route("/logout").get(authUser, logoutUser);

export default router;
