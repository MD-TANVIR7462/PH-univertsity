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
exports.USerServices = void 0;
const student_model_1 = require("../students/student.model");
const user_model_1 = require("./user.model");
require("dotenv").config();
const creatUser = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.create(data);
    return result;
});
const getUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.find();
    return result;
});
const getSingleUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.findOne({ _id: { $eq: id } });
    return result;
});
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.deleteOne({ _id: id });
    return result;
});
const updateUser = (id, data) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.UserModel.updateOne({ _id: { $eq: id } }, { $set: data });
    return result;
});
const creatStudentIntoDB = (student, password) => __awaiter(void 0, void 0, void 0, function* () {
    const user = {};
    user.role = "student";
    user.password = password || process.env.Default_pass;
    user.id = "2030100001";
    const NewUSer = yield user_model_1.UserModel.create(user);
    //creat a student //
    if (Object.keys(NewUSer).length) {
        student.id = NewUSer.id;
        student.user = NewUSer._id;
    }
    const NewStudent = yield student_model_1.StudentModel.create(student);
    return NewStudent;
});
//export all the services
exports.USerServices = {
    creatUser,
    getUser,
    getSingleUser,
    deleteUser,
    updateUser,
    creatStudentIntoDB,
};
