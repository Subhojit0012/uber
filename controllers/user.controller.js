const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const createUser = require("../services/user.service");


// Register the user:
/*
  * @token: when the user will be registred the token will be created
  ! @erors: checks all fields in the body
*/
module.exports.registerUser = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() }).status(400);
  }

  const { fullName, email, password } = req.body;

  const hashPassword = User.hashPassword(password);

  const user = await createUser({
    firstname: fullName.firstname,
    lastname: fullName.lastname,
    email,
    password: hashPassword,
  });

  const token = user.generateAuthToken(); // ✨

  res.status(200).json({ token, user });
};
