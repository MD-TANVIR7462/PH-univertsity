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
exports.serviceStudent = void 0;
const student_model_1 = require("./student.model");
const getALlstudentsDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.find({}, {});
    return result;
});
const getAsigleStudentDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.findOne({ _id: { $eq: id } });
    return result;
});
const deleteStudentDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.deleteOne({ _id: id });
    return result;
});
const updateStudentDB = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.StudentModel.updateOne({ _id: { $eq: id } }, { $set: data });
    return result;
});
//export all the services
exports.serviceStudent = {
    getALlstudentsDB,
    getAsigleStudentDB,
    deleteStudentDB,
    updateStudentDB,
};
