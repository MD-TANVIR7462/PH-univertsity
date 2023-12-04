import { Request, Response } from "express";
import { USerServices } from "./userServices";


const createUserCl = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const result = await USerServices.creatUser(userData);

    if (result) {
      res.status(200).json({
        success: true,
        message: "User created successfully",
        data: result,
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: err,
    });
  }
};