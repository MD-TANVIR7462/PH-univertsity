import { Student } from "./student.interface";
import { StudentModel } from "./student.model";

const creatStudentIntoDB = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getALlstudentsDB = async () => {
   const result = await StudentModel.find()
   return result


}













export const serviceStudent = {
  creatStudentIntoDB,getALlstudentsDB
};
