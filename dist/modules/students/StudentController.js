"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentAllControllers = void 0;
const StudentServices_1 = require("./StudentServices");
const creatStudent = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const student = req.body;
        const result = yield StudentServices_1.serviceStudent.creatStudentIntoDB(student);
        res.status(200).json({
            success: true,
            message: "Student created successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Student not created",
            error: err,
        });
        console.log(err);
    }
});
const getALlstudents = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield StudentServices_1.serviceStudent.getALlstudentsDB();
        res.status(200).json({
            success: true,
            message: "Student retrive successfully",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Student not founded",
            error: err,
        });
    }
});
exports.StudentAllControllers = {
    creatStudent, getALlstudents
};
