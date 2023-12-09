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
exports.SemesterServices = void 0;
const semester_model_1 = require("./semester.model");
const cresteSemesterInDB = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, year } = data;
    //validate exixting user in DB
    const validatExistingUser = yield semester_model_1.SemesterModel.findOne({
        name: { $eq: name },
        year: { $eq: year },
    });
    //if semester not exist the create new one
    if (!validatExistingUser) {
        const result = yield semester_model_1.SemesterModel.create(data);
        return result;
    }
    else {
        const result = {
            success: false,
            message: "Semester already exists in this year",
        };
        return result;
    }
});
const getSemesterInDb = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semester_model_1.SemesterModel.find({}, { name: 1 });
    return result;
});
const getSingleSemesterInDb = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semester_model_1.SemesterModel.findOne({ _id: { $eq: id } });
    return result;
});
exports.SemesterServices = {
    cresteSemesterInDB,
    getSemesterInDb,
    getSingleSemesterInDb,
};
