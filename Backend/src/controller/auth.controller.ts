import { Request, Response } from "express";
import { prisma } from "../config/prisma";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AuthRequest } from "../types/auth-request";

require("dotenv").config();

const jwtSecret = process.env.jwtSecret || "babydoll";

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(404).json({
      error: "input not found",
    });
    return;
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
        email,
      },
    });

    if (user) {
      res.status(404).json({
        error: "User with this email or username already exist",
      });
      return;
    }

    if (typeof password !== "string" || password.length < 1) {
      res.status(400).json({ error: "Invalid password" });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(200).json({
      msg: "User Created Succesfully",
      id: createUser.id,
      username: createUser.username,
    });
  } catch (err) {
    console.error("Error while creating the account", err);
    res.status(500).json({
      error: "Something went wrong with signup",
    });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(404).json({
      error: "Email password not found",
    });
    return;
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      res.status(404).json({
        error: "user with this email doesn't exist",
      });
      return;
    }

    const hashedPassword = await bcrypt.compare(password, user.password);

    if (!hashedPassword) {
      res.status(401).json({
        error: "Wrong Password",
      });
      return;
    }
    const token = jwt.sign(
      {
        id: user.id,
        role: user.role,
      },
      jwtSecret,
    );

    res.status(200).json({
      msg: "User Login Succesfully",
      token: `Bearer ${token}`,
    });
  } catch (err) {
    console.error("Getting issue while login", err);
    res.status(500).json({
      error: "something went wrong with login",
    });
    return;
  }
};

export const verify = async (req: AuthRequest, res: Response) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      res.status(404).json({
        error: "Invalid token",
      });
      return;
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        username: true,
        email: true,
        role: true,
        plan: true,
      },
    });

    if (!user) {
      res.status(404).json({
        error: "user not found",
      });
      return;
    }

    res.status(200).json({
      status: "Success",
      valid: true,
      user,
    });
    return;
  } catch (err) {
    console.error(err);
    res.status(404).json({
      error: "something went wrong while verifying",
    });
    return;
  }
};
