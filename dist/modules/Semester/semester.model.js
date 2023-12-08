"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterModel = void 0;
const mongoose_1 = require("mongoose");
const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
const SemesterSchema = new mongoose_1.Schema({
    name: { type: "string", required: true },
    year: { type: "String", required: true },
    code: { type: "string", required: true },
    startMonth: { type: "string", enum: Months },
    endMonth: { type: "string", enum: Months },
});
//export const UserModel = model<Tuser>("User", userSchema)
exports.SemesterModel = (0, mongoose_1.model)("semster", SemesterSchema);
