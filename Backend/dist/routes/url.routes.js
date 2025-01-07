"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const middleware_1 = require("../middleware");
const guest_1 = require("../middleware/guest");
const router = express_1.default.Router();
router.post("/create", middleware_1.requireAuth, controller_1.UrlController.createUrl);
router.get("/get", middleware_1.requireAuth, controller_1.UrlController.getUrl);
router.put("/update/:urlId", middleware_1.requireAuth, controller_1.UrlController.updateUrl);
router.delete("/delete", middleware_1.requireAuth, controller_1.UrlController.deleteUrl);
router.get("/:urlId", controller_1.UrlController.redirectUrl);
router.post("/guest/create", guest_1.guestMiddleware, controller_1.UrlController.guestUrl);
exports.default = router;
