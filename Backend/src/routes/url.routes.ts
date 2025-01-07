import express from "express";
import { UrlController } from "../controller";
import { requireAuth } from "../middleware";
import { guestMiddleware } from "../middleware/guest";

const router = express.Router();

router.post("/create", requireAuth, UrlController.createUrl);
router.get("/get", requireAuth, UrlController.getUrl);
router.put("/update/:urlId", requireAuth, UrlController.updateUrl);
router.delete("/delete", requireAuth, UrlController.deleteUrl);
router.get("/:urlId", UrlController.redirectUrl);
router.post("/guest/create", guestMiddleware, UrlController.guestUrl);

export default router;
