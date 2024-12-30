import { Router } from "express";
import { body } from "express-validator";
import { registerCaptain } from "../controllers/captain.controller.js";

const router = Router();

router.post(
  "/register",
  [
    body("fullname.firstname")
      .isString()
      .isLength({ min: 3 })
      .withMessage("Full name must be at least 3 characters long"),
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("vehicle.color").isString().withMessage("Color must be a string"),
    body("vehicle.plate")
      .isString()
      .isLength({ min: 6 })
      .withMessage("Plate must be at least 6 characters long"),
    body("vehicle.capacity")
      .isNumeric()
      .withMessage("Capacity must be a number"),
    body("vehicleType")
      .isString()
      .isIn(["car", "motorcycle", "auto"])
      .withMessage("Invalid vehicle type"),
  ],
  registerCaptain
);

export default router;
