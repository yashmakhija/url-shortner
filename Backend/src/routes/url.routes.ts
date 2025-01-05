import express from "express";
import { UrlController } from "../controller";
import { requireAuth } from "../middleware";

const router = express.Router();

router.post("/create", requireAuth, UrlController.createUrl);
router.get("/get", requireAuth, UrlController.getUrl);

export default router;
