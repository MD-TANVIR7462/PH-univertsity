import { Request, Response } from "express";
import { serviceStudent } from "./StudentServices";

const creatStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const result = await serviceStudent.creatStudentIntoDB(student);
    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student not created",
      error: err,
    });
    console.log(err);
  }
};

const getALlstudents = async(req:Request, res:Response) => {
   try{
      const result = await serviceStudent.getALlstudentsDB()
      res.status(200).json({
         success: true,
         message: "Student retrive successfully",
         data: result,
       });
   }

   catch(err){
      res.status(500).json({
         success: false,
         message: "Student not founded",
         error: err,
   })
   }
}


export const StudentAllControllers = {
  creatStudent,getALlstudents
};
