"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("./user.controler");
const router = express_1.default.Router();
router.get('/', user_controler_1.GetUserCl);
router.get('/:id', user_controler_1.GetSigleUserCl);
router.post("/", user_controler_1.createUserCl);
router.delete('/:id', user_controler_1.deleteSigleUserCl);
router.put('/:id', user_controler_1.UpdateSigleUserCl);
exports.userRouter = router;
