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
exports.SemesterController = void 0;
const semsester_services_1 = require("./semsester.services");
const createSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const semesterData = req.body;
        const result = yield semsester_services_1.SemesterServices.cresteSemesterInDB(semesterData);
        res.status(200).json({
            success: true,
            message: "semester created successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
const getSemester = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield semsester_services_1.SemesterServices.getSemesterInDb();
        res.status(200).json({
            success: true,
            message: "semseter retrived successfully",
            data: result,
        });
    }
    catch (err) {
        next(err);
    }
});
exports.SemesterController = {
    createSemester,
    getSemester
};
