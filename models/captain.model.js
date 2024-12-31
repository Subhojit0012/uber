import mongoose from "mongoose";
import { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const captainSchema = new Schema({
	fullname: {
		firstname: {
			type: String,
			required: true,
			minlength: [3, "firstname must be at least 3 characters long"],
		},
		lastname: {
			type: String,
			minlength: [3, "lastname must be at least 3 characters long"],
		},
	},
	email: {
		type: String,
		required: true,
		unique: true,
		lowercase: true,
		trim: true,
		match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
	},
	password: {
		type: String,
		required: true,
		minlength: [8, "password must be at least 8 characters long"],
	},
	socketId: {
		type: String,
	},
	status: {
		type: String,
		enum: ["online", "offline"],
		default: "offline",
	},
	vehicle: {
		color: {
			type: String,
			required: true,
		},
		plate: {
			type: String,
			required: true,
			minlength: [6, "plate must be at least 6 characters long"],
		},
		capacity: {
			type: Number,
			required: true,
			min: [1, "capacity must be at least 1"],
		},
		vehicleType: {
			type: String,
			enum: ["car", "motorcycle", "auto"],
			required: true,
		},
	},

	location: {
		lat: {
			type: Number,
		},
		lng: {
			type: Number,
		},
	},
});

captainSchema.methods.generateAuthToken = function () {
	const token = jwt.sign(
		{
			_id: this._id,
			email: this.email,
			fullname: this.fullname,
			vehicle: this.vehicle,
			vehicleType: this.vehicleType,
		},
		process.env.JWT_SECRET,
		{ expiresIn: "1h" },
	);

	return token;
};

captainSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async (password) => {
	return await bcrypt.hash(password, 10);
};

export const Captain = mongoose.model("Captain", captainSchema);
