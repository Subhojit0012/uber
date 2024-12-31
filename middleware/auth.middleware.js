import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// * Authorize the user:
// This middleware function checks for a valid JWT token in the request.
// If the token is present and valid, it retrieves the associated user from the database
// and attaches the user object to the request for further processing.
// If the token is missing, invalid, or the user is not found, it sends an appropriate error response.
export const authUser = async (req, res, next) => {
	const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

	// Check if the token is provided
	if (!token) {
		return res.status(401).json({ message: "Unauthorized! 👎" });
	}

	const isBalckListed = await User.findOne({ token: token });

	if (isBalckListed) return res.status(400).json({ message: "Unauthorized" });

	try {
		// Verify the token using the secret key
		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		// Check if the token was successfully decoded
		if (!decoded) {
			return res.status(401).json({ message: "Unauthorized!" });
		}

		// Find the user associated with the decoded token ID
		const user = await User.findById(decoded.id); // No need for { _id: decoded.id }

		// Check if the user exists
		if (!user) {
			return res.status(404).json({ message: "User not found!" });
		}

		// Attach the user object to the request for further use
		req.user = user;
		next(); // Call next() to pass control to the next middleware
	} catch (error) {
		// Handle any errors that occur during the process
		return res.status(500).json({ message: error.message }); // Use 500 for server errors
	}
};
