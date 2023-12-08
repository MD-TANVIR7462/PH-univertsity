"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const user_controler_1 = require("./user.controler");
const router = express_1.default.Router();
// const shenaBahini = (NameData: any) => {
//   return async (req: Request, res: Response, next: NextFunction) => {
//     const data = req.body;
//     console.log(data, NameData);
//      next();
//   };
// };
router.get("/", user_controler_1.GetUserCl);
router.get("/:id", user_controler_1.GetSigleUserCl);
router.post("/create-student", user_controler_1.creatStudent);
// router.post("/create-student", shenaBahini("hellow data "), creatStudent);
router.delete("/:id", user_controler_1.deleteSigleUserCl);
router.put("/:id", user_controler_1.UpdateSigleUserCl);
exports.userRouter = router;
