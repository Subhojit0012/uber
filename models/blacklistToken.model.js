import mongoose, { Schema } from "mongoose";

const blacklistToken = new Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400, // 24 hrs in seconds
  },
});

export const BlacklistToken = mongoose.model("BlacklistToken", blacklistToken);
