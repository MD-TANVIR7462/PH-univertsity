import express from "express";
import { GetSigleUserCl, GetUserCl, UpdateSigleUserCl, createUserCl, deleteSigleUserCl } from "./user.controler";
const router = express.Router();

router.get('/',GetUserCl)
router.get('/:id',GetSigleUserCl)
router.post("/",createUserCl)
router.delete('/:id',deleteSigleUserCl);
router.put('/:id',UpdateSigleUserCl);

export const userRouter = router