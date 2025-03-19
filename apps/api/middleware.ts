import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PUBLIC_KEY } from "./config";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers["authorization"];
  req.userId = "1";
  if (!authHeader) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = authHeader.split(" ")[1];
  if (token !== "1") {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }
  const decoded = jwt.verify(token, JWT_PUBLIC_KEY);
  console.log("decoded: ", decoded);
  if (!decoded || !decoded.sub) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  req.userId = decoded.sub as string;

  next();
}
