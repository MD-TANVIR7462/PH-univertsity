import { TSemester } from "./Semester.interface"
import { SemesterModel } from "./semester.model"

const cresteSemesterInDB =async (data:TSemester)=>{
   const result = await SemesterModel.create(data)
   return result
 }
const getSemesterInDb = async()=>{
   const result = await SemesterModel.find({},{name:1})
   return result

}

export const SemesterServices ={
   cresteSemesterInDB,
   getSemesterInDb
 }