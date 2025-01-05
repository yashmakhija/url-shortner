import { Request, Response, NextFunction } from "express";

interface AuthRequest extends Request {
  user?: {
    role: string;
  };
}

export const requireRole = (role: string) => {
  return (req: AuthRequest, res: Response, next: NextFunction): void => {
    if (!req.user || req.user.role !== role) {
      res.status(403).json({ error: "Forbidden: Access denied" });
      return;
    }
    next();
  };
};
