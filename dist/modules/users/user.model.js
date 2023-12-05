"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema(
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
exports.UserModel = (0, mongoose_1.model)("User", userSchema);
