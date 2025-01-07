import { Request, Response, NextFunction } from "express";
import { v4 as uuidv4 } from "uuid";

export interface GuestRequest extends Request {
  guestId?: string;
}

export const guestMiddleware = (
  req: GuestRequest,
  res: Response,
  next: NextFunction
) => {
  let guestId = req.cookies.guestId;

  if (!guestId) {
    guestId = uuidv4(); // Generate a unique identifier
    res.cookie("guestId", guestId, {
      httpOnly: true,
      maxAge: 30 * 24 * 60 * 60 * 1000,
    }); // 30 days validity
  }

  req.guestId = guestId;
  next();
};
