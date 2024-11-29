import { User } from "../models/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";
/*
  * @token: when the user will be registred the token will be created
  ! @erors: checks all fields in the body
*/

// Register the user:
const registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() }).status(400);
  }

  const { fullName, email, password } = req.body;

  const hashPassword = await User.hashPassword(password);

  const user = await createUser({
    firstname: fullName.firstname,
    lastname: fullName.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken(); // ✨

  res.status(200).json({ token, user });
};

const loginUser = async (req, res) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({ error: error.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(400).json({ message: "User not found!" });

  const verifyPass = await user.comparePassword(password);

  if (!verifyPass)
    return res.status(401).json({ message: "password not matched" });

  const token = user.generateAuthToken();

  if (!token) return res.status(401).json({ message: "Token not created" });

  res.status(200).cookie("token", token).json({ token, user });
};

export { registerUser, loginUser };
