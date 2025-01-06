import express from "express";
import { UrlController } from "../controller";
import { requireAuth } from "../middleware";

const router = express.Router();

router.post("/create", requireAuth, UrlController.createUrl);
router.get("/get", requireAuth, UrlController.getUrl);
router.put("/update/:urlId", requireAuth, UrlController.updateUrl);
router.delete("/delete", requireAuth, UrlController.deleteUrl);
router.get("/:urlId", UrlController.redirectUrl);

export default router;
