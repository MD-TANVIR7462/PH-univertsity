import { NextFunction, Request, Response } from "express";

export const notFound = (req: Request, res: Response, next: NextFunction) => {
  return res.status(404).json({
    success: false,
    message: "Bad request path not found",
    error: "error ",
  });
};
