import { Response } from "express";
import { AuthRequest } from "../types/auth-request";
import { prisma } from "../config/prisma";

export const userProfile = async (req: AuthRequest, res: Response) => {
  const user = req.user as { id: number };

  if (!user) {
    res.status(404).json({
      error: "user not found",
    });
    return;
  }

  try {
    const userExist = await prisma.user.findMany({
      select: {
        username: true,
        email: true,
        plan: true,
      },
      where: {
        id: user.id,
      },
    });

    if (!userExist) {
      res.status(404).json({
        error: "User not exist",
      });
      return;
    }

    res.status(200).json({
      userExist,
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "error while getting your profile",
    });
  }
};
