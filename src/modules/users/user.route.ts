import express from "express";
import { GetSigleUserCl, GetUserCl, UpdateSigleUserCl, creatStudent, deleteSigleUserCl } from "./user.controler";
const router = express.Router();

router.get('/',GetUserCl)
router.get('/:id',GetSigleUserCl)
router.post("/create-student",creatStudent)
router.delete('/:id',deleteSigleUserCl);
router.put('/:id',UpdateSigleUserCl);

export const userRouter = router