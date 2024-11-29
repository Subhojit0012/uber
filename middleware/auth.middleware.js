import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt, { decode } from "jsonwebtoken";

export const authUser = async (req, res) => {
  const token = req.cookie.token || req.headers.authorization.split(" ")[1];

  if (!token) {
    throw new Error("Unauthorized! 👎");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded)
      return res.status(401).json({ message: "token not verified!" });

    const user = await User.findById({ _id: decode.id });

    if (!user) return res.status(400).json({ message: "User not found!" });

    req.user = user;
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
