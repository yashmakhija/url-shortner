import { Request, Response } from "express";
import { AuthRequest } from "../types/auth-request";
import { prisma } from "../config/prisma";

export const createUrl = async (req: AuthRequest, res: Response) => {
  const { destinationLink } = req.body;
  const user = req.user as { id: number };

  if (!destinationLink) {
    res.status(404).json({
      error: "Destination url not found",
    });
    return;
  }

  try {
    const url = await prisma.url.create({
      data: {
        destinationLink,
        userId: user.id,
      },
    });
    res.status(200).json({
      status: "Success",
      url,
    });
    return;
  } catch (err) {
    console.error("error while creatign the url shortner", err);
    res.status(500).json({
      error: "error while creating the url",
    });
    return;
  }
};

export const getUrl = async (req: AuthRequest, res: Response) => {
  const user = req.user as { id: number };

  try {
    const userUrl = await prisma.user.findMany({
      where: {
        id: user.id,
      },
      include: {
        urls: true,
      },
    });

    res.status(200).json({
      status: "Success",
      userUrl,
    });
    return;
  } catch (err) {
    console.error("error while getting the url", err);
    res.status(500).json({
      error: "erorr while getting the url",
    });
    return;
  }
};
