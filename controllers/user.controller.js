import { User } from "../models/user.model.js";
import { validationResult } from "express-validator";
import createUser from "../services/user.service.js";
import { BlacklistToken } from "../models/blacklistToken.model.js";

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

	const isUserAlreadyExist = await User.findOne({ email });

	if (isUserAlreadyExist) {
		return res.status(400).json({ message: "User already exists" });
	}
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

	if (!verifyPass) return res.status(401).json({ message: "password not matched" });

	const token = user.generateAuthToken();

	if (!token) return res.status(401).json({ message: "Token not created" });

	const options = {
		httpOnly: true,
		secure: true,
	};

	res.status(200).cookie("token", token, options).json({ token, user });
};

const getUserProfile = async (req, res) => {
	return res.status(200).json(req.user);
};

const logoutUser = async (req, res) => {
	const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

	if (!token) return res.status(400).json({ message: "Token not found" });
	const blacklist = await BlacklistToken.create({ token: token });

	if (!blacklist)
		return res.status(400).json({ message: "token balcklisted unsuccessfull!" });

	return res.clearCookie("token").status(200).json({ message: "cookie cleared" });
};

export { registerUser, loginUser, getUserProfile, logoutUser };
