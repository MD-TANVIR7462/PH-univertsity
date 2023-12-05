"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const StudentRoutes_1 = require("./modules/students/StudentRoutes");
const user_route_1 = require("./modules/users/user.route");
//parsers
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.text());
app.use('/api/students', StudentRoutes_1.studentRoutes);
app.use('/api/users', user_route_1.userRouter);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
exports.default = app;
