"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentRoutes = void 0;
const express_1 = __importDefault(require("express"));
const StudentController_1 = require("./StudentController");
const router = express_1.default.Router();
//student routes 
router.get("/", StudentController_1.StudentAllControllers.getALlstudents);
router.get("/:id", StudentController_1.StudentAllControllers.getSignleStudent);
router.post("/", StudentController_1.StudentAllControllers.creatStudent);
router.delete("/:id", StudentController_1.StudentAllControllers.deleteSignelStudent);
router.put('/:id', StudentController_1.StudentAllControllers.updateSignelStudent);
exports.studentRoutes = router;
