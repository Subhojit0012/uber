const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require('../controllers/user.controller')

router
  .route("/register")
  .post(
    [body("email").trim().isEmail().withMessage("Email required!"),
    body("fullName.firstname")
      .isLength({ min: 3 })
      .isString()
      .withMessage("Invalid! 🛑"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Minimum length 6 characters! 👈")],
      userController.registerUser
  );

module.exports = router;
