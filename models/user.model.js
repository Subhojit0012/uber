import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
	fullName: {
		firstname: {
			type: String,
			required: true,
			minlength: [3, "Your first name must require 3 words"],
		},
		lastname: {
			type: String,
			minlength: 3,
		},
	},
	email: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
		select: false,
	},
	socketID: {
		type: String,
	},
});

userSchema.methods.generateAuthToken = function () {
	const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
		expiresIn: "15m",
	});
	// console.log(token);
	return token;
};

userSchema.statics.hashPassword = async (password) => {
	return await bcrypt.hash(password, 10);
};

userSchema.methods.comparePassword = async function (password) {
	return await bcrypt.compare(password, this.password);
};

export const User = mongoose.model("user", userSchema);
