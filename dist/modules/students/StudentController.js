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
const getALlstudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield StudentServices_1.serviceStudent.getALlstudentsDB();
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "students does not exist",
            });
        }
        res.status(200).json({
            success: true,
            message: "Student retrive successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSignleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield StudentServices_1.serviceStudent.getAsigleStudentDB(id);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "This student does not exist",
            });
        }
        res.status(200).json({
            success: true,
            message: "Single Student retrive successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const deleteSignelStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const result = yield StudentServices_1.serviceStudent.deleteStudentDB(id);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "This student does not exist",
            });
        }
        res.status(500).json({
            success: true,
            message: "studentDB deleted successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const updateSignelStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const data = req.body;
        const result = yield StudentServices_1.serviceStudent.updateStudentDB(id, data);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Student not founded",
            });
        }
        res.status(500).json({
            success: true,
            message: "studentDB updated successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
//export allcontrolers
exports.StudentAllControllers = {
    getALlstudents,
    getSignleStudent,
    deleteSignelStudent,
    updateSignelStudent,
};
