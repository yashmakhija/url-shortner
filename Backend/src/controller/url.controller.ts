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

export const updateUrl = async (req: Request, res: Response) => {
  const { shortName, comments } = req.body;
  const { urlId } = req.params;

  if (!shortName) {
    res.status(404).json({
      error: "Short name not found",
    });
    return;
  }
  try {
    const urlExist = await prisma.url.findUnique({
      where: {
        id: urlId,
      },
    });

    if (!urlExist) {
      res.status(404).json({
        error: "url not found ",
      });
      return;
    }

    const updateUrl = await prisma.url.updateMany({
      where: { id: urlExist.id },
      data: {
        shortName,
        comments: comments || null,
      },
    });

    res.status(200).json({
      updateUrl,
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Getting error while updating the url",
    });
  }
};

export const deleteUrl = async (req: Request, res: Response) => {
  const { urlId } = req.body;

  if (!urlId) {
    res.status(404).json({
      error: "url not found",
    });
    return;
  }

  try {
    const deleteUrl = await prisma.url.delete({
      where: {
        id: urlId,
      },
    });

    res.status(200).json({
      status: "Success",
      deleteUrl,
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Getting issue while deleting the url",
    });
    return;
  }
};
