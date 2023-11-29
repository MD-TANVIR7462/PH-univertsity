import { z } from "zod";
export const UserValidationZOD = z.object({
  
  password: z.string({
   invalid_type_error:"password must be in string format"
  }).max(20, { message: "password cannot be mor than 20" }).optional(),

});
