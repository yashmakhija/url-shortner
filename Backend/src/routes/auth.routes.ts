import express from "express";
import { AuthController } from "../controller";
import { requireAuth } from "../middleware";

const router = express.Router();

router.post("/signup", AuthController.signUp);
router.post("/signin", AuthController.signIn);
router.get("/verify", requireAuth, AuthController.verify);

export default router;
