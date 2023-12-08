import express, { NextFunction, Request, Response } from "express";
import {
  GetSigleUserCl,
  GetUserCl,
  UpdateSigleUserCl,
  creatStudent,
  deleteSigleUserCl,
} from "./user.controler";
const router = express.Router();

// const shenaBahini = (NameData: any) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const data = req.body;
//     console.log(data, NameData);
//      next();
//   };
// };

router.get("/", GetUserCl);
router.get("/:id", GetSigleUserCl);
router.post("/create-student", creatStudent);
// router.post("/create-student", shenaBahini("hellow data "), creatStudent);
router.delete("/:id", deleteSigleUserCl);
router.put("/:id", UpdateSigleUserCl);

export const userRouter = router;

