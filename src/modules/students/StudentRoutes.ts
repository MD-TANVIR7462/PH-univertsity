import express from "express";
import { StudentAllControllers } from "./StudentController";
const router = express.Router();



//student routes 

router.get("/",StudentAllControllers.getALlstudents);
router.get("/:id",StudentAllControllers.getSignleStudent)
router.post("/", StudentAllControllers.creatStudent);
router.delete("/:id",StudentAllControllers.deleteSignelStudent)
router.put('/:id',StudentAllControllers.updateSignelStudent)


export const studentRoutes = router;
