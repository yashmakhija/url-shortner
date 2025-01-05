import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: JwtPayload | string;
}
const jwtSecret = process.env.jwtSecret || "babydoll";

export const requireAuth = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({
      error: "Unautherized access",
    });
    return;
  }
  const token = authHeader.split(" ")[1];

  try {
    const verifyToken = jwt.verify(token, jwtSecret);
    req.user = verifyToken;
    next();
  } catch (err) {
    console.error("middelware error", err);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};
