import express from "express";
import { UserController } from "../controller";
import { requireAuth } from "../middleware";
const router = express.Router();

router.get("/me", requireAuth, UserController.userProfile);

export default router;
