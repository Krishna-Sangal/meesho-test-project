import { Request, Response, NextFunction } from "express";
import * as jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    console.log("test logs")
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }
    const secret = process.env.JWT_SECRET as string;

    const decoded = jwt.verify(token, secret) as any;

    // attach user to request
    (req as any).user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};