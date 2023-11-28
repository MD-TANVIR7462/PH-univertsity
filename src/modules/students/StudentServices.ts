import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getALlstudentsDB = async () => {
  const result = await StudentModel.find({}, { name: 1 });
  return result;
};

const getAsigleStudentDB = async (id: string) => {
  const result = await StudentModel.findOne({ _id: { $eq: id } });
  return result;
};

const deleteStudentDB = async (id: string) => {
  const result = await StudentModel.deleteOne({ _id: id });
  return result;
};

const updateStudentDB = async (id: string, data: Partial<Student>) => {
  const result = await StudentModel.updateOne(
    { _id: { $eq: id } },
    { $set: data }
  );
  return result;
};

//export all the services
export const serviceStudent = {
  creatStudentIntoDB,
  getALlstudentsDB,
  getAsigleStudentDB,
  deleteStudentDB,
  updateStudentDB,
};
