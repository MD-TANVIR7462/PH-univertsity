import { Schema, model } from "mongoose";
import { TMonth, TSemester } from "./Semester.interface";

const Months: TMonth[] = [
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

const SemesterSchema = new Schema<TSemester>({
  name: { type: "string", required: true },
  year: { type: "String", required: true },
  code: { type: "string", required: true },
  startMonth: { type: "string", enum: Months },
  endMonth: { type: "string", enum: Months },
});
//export const UserModel = model<Tuser>("User", userSchema)
export const SemesterModel = model<TSemester>("semster", SemesterSchema);
