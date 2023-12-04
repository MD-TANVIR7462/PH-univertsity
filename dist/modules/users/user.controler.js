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
const userServices_1 = require("./userServices");
const createUserCl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield userServices_1.USerServices.creatUser(userData);
        if (result) {
            res.status(200).json({
                success: true,
                message: "User created successfully",
                data: result,
            });
        }
    }
    catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal server error",
            error: err,
        });
    }
});
