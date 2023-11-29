import { Schema, model } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>(
  {
    id: { type: String, required: true },
    password: { type: String, required: true },
    needsPassword: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
    status: {
      type: String,
      enum: ["in-progress", "blocked"],

      default: "in-progress",
    },

    role: {
      type: String,
      enum: ["admin", "student", "faculty"],

    },
  },
  {
    timestamps: true,
  }
);
export const UserModel = model<Tuser>("User", userSchema);
