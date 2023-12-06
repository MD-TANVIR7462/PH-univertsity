import { Student } from "../students/student.interface";
import { StudentModel } from "../students/student.model";
import { TNewUser, Tuser } from "./user.interface";
import { UserModel } from "./user.model";
require("dotenv").config();

const creatUser = async (data: Tuser) => {
  const result = await UserModel.create(data);
  return result;
};

const getUser = async () => {
  const result = await UserModel.find();
  return result;
};

const getSingleUser = async (id: string) => {
  const result = await UserModel.findOne({ _id: { $eq: id } });
  return result;
};

const deleteUser = async (id: string) => {
  const result = await UserModel.deleteOne({ _id: id });
  return result;
};

const updateUser = async (id: string, data: Partial<Tuser>) => {
  const result = await UserModel.updateOne(
    { _id: { $eq: id } },
    { $set: data }
  );
  return result;
};

const creatStudentIntoDB = async (student: Student, password: string) => {
  const user: Partial<Tuser> = {};
  user.role = "student";
  user.password = password || (process.env.Default_pass as string);
  user.id = "2030100001";
  const NewUSer = await UserModel.create(user);

  //creat a student //
  if (Object.keys(NewUSer).length) {
    student.id = NewUSer.id;
    student.user = NewUSer._id;
  }

  const NewStudent = await StudentModel.create(student);
  return NewStudent;
};

//export all the services
export const USerServices = {
  creatUser,
  getUser,
  getSingleUser,
  deleteUser,
  updateUser,
  creatStudentIntoDB,
};
