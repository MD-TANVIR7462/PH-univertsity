import { NextFunction, Request, Response } from "express";
import { SemesterServices } from "./semsester.services";

const createSemester = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const semesterData = req.body;
    const result = await SemesterServices.cresteSemesterInDB(semesterData);
    res.status(200).json({
      success: true,
      message: "semester created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSemester = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await SemesterServices.getSemesterInDb();
    res.status(200).json({
      success: true,
      message: "semseter retrived successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};
export const SemesterController = {
  createSemester,
  getSemester
};
