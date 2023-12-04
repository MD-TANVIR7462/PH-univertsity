"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidationZOD = void 0;
const zod_1 = require("zod");
exports.UserValidationZOD = zod_1.z.object({
    password: zod_1.z.string({
        invalid_type_error: "password must be in string format"
    }).max(20, { message: "password cannot be mor than 20" }).optional(),
});
