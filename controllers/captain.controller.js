import { Captain } from "../models/captain.model.js";
import { validationResult } from "express-validator";
import createCaptain from "../services/captain.service.js";
import { BlacklistToken } from "../models/blacklistToken.model.js";

const registerCaptain = async (req, res) => {
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
		return res.json({ errors: errors.array() }).status(400);
	}

	const { fullname, email, password, vehicle } = req.body;

	if (!fullname || !email || !password || !vehicle) {
		return res.status(400).json({ message: "All fields are required" });
	}

	const isCaptainAlreadyExist = await Captain.findOne({ email }).exec();

	if (isCaptainAlreadyExist) {
		return res.status(400).json({ message: "Captain already exists" });
	}

	const hashPassword = await Captain.hashPassword(password);

	const captain = await createCaptain({
		firstname: fullname.firstname,
		lastname: fullname.lastname,
		email,
		password: hashPassword,
		color: vehicle.color,
		plate: vehicle.plate,
		capacity: vehicle.capacity,
		vehicleType: vehicle.vehicleType,
	});

	if (!captain) {
		return res.status(500).json({ message: "Captain not created" });
	}

	const token = captain.generateAuthToken();
	if (!token) {
		return res.status(400).json({ message: "token not created" });
	}

	return res.status(200).json({ captain, token });
};

const loginCaptain = async (req, res) => {
	const error = validationResult(req);

	if (!error.isEmpty()) {
		return res.json({ error: error.array() });
	}

	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(404).json({ message: "email and password not fiiled" });
	}

	const captain = await Captain.findOne({ email }).select("+password");
	if (!captain) {
		return res.status(404).json({ message: "Captain not found" });
	}

	const isPasswordMatched = await captain.comparePassword(password);

	if (!isPasswordMatched) {
		return res.status(400).json({ message: "password not matched" });
	}

	const createToken = captain.generateAuthToken();
	if (!createToken) {
		return res.status(400).json({ message: "token not created!" });
	}

	const options = {
		httpOnly: true,
		secure: true,
	};

	return res.status(200).cookie("token", createToken, options).json({ captain });
};

const logoutCaptain = async (req, res) => {
	const token = req.cookies?.token || req.headers["Authorization"]?.token.split(" ")[1];

	if (!token) {
		return res.status(400).json({ message: "Unauthorised" });
	}

	const backListToken = await BlacklistToken.create({ token });
	if (!backListToken) {
		return res.status(400).json({ message: "failed to backlist token!" });
	}

	return res
		.status(200)
		.clearCookie("token")
		.json({ message: "cookie cleared", backListToken });
};

export { registerCaptain, loginCaptain, logoutCaptain };
