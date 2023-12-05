import { Request, Response, response } from "express";
import { serviceStudent } from "./StudentServices";


const getALlstudents = async (req: Request, res: Response) => {
  try {
    const result = await serviceStudent.getALlstudentsDB();
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Student not founded",
      });
    }
    res.status(200).json({
      success: true,
      message: "Student retrive successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student not founded",
      error: err,
    });
  }
};

const getSignleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await serviceStudent.getAsigleStudentDB(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Student not founded",
      });
    }

    res.status(200).json({
      success: true,
      message: "Single Student retrive successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student not founded",
      error: err,
    });
  }
};

const deleteSignelStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await serviceStudent.deleteStudentDB(id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Student not founded",
      });
    }

    res.status(500).json({
      success: true,
      message: "studentDB deleted successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student cann't deleted",
      error: err,
    });
  }
};

const updateSignelStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const result = await serviceStudent.updateStudentDB(id, data);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Student not founded",
      });
    }

    res.status(500).json({
      success: true,
      message: "studentDB updated successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Student cann't updated",
      error: err,
    });
  }
};
//export allcontrolers
export const StudentAllControllers = {

  getALlstudents,
  getSignleStudent,
  deleteSignelStudent,
  updateSignelStudent,
};
