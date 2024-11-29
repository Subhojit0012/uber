import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

// * Authorize the user:
export const authUser = async (req, res, next) => {
  const token =
    req.cookies.token ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) {
    return res.status(401).json({ message: "Unauthorized! 👎" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ message: "Token not verified!" });
    }

    const user = await User.findById(decoded.id); // No need for { _id: decoded.id }

    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    req.user = user;
    next(); // Call next() to pass control to the next middleware
  } catch (error) {
    return res.status(500).json({ message: error.message }); // Use 500 for server errors
  }
};
