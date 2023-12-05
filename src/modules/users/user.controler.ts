import { Request, Response } from "express";
import { USerServices } from "./userServices";


export const createUserCl = async (req: Request, res: Response) => {
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
export const GetUserCl = async (req: Request, res: Response) => {
  try {
   
    const result = await USerServices.getUser();

    if (result) {
      res.status(200).json({
        success: true,
        message: "User find successfully",
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
export const GetSigleUserCl = async (req: Request, res: Response) => {
  try {
   const {id} = req.params;
    const result = await USerServices.getSingleUser(id);

    if (result) {
      res.status(200).json({
        success: true,
        message: "User fatched successfully",
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
export const deleteSigleUserCl = async (req: Request, res: Response) => {
  try {
   const {id} = req.params;
    const result = await USerServices.deleteUser(id);

    if (result) {
      res.status(200).json({
        success: true,
        message: "User delete successfully",
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
export const UpdateSigleUserCl = async (req: Request, res: Response) => {
  try {
   const {id} = req.params;
   const data = req.body; 
    const result = await USerServices.updateUser(id,data);

    if (result) {
      res.status(200).json({
        success: true,
        message: "User updated successfully",
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