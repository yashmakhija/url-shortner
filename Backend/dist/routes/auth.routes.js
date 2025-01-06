"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const controller_1 = require("../controller");
const middleware_1 = require("../middleware");
const router = express_1.default.Router();
router.post("/signup", controller_1.AuthController.signUp);
router.post("/signin", controller_1.AuthController.signIn);
router.get("/verify", middleware_1.requireAuth, controller_1.AuthController.verify);
exports.default = router;
