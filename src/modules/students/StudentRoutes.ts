import express from "express";
import { StudentAllControllers } from "./StudentController";
const router = express.Router();

router.get("/",StudentAllControllers.getALlstudents);
router.post("/", StudentAllControllers.creatStudent);

export const studentRoutes = router;
