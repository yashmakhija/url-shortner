"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/api/auth", routes_1.authRoutes);
app.use("/api/url", routes_1.UrlRoutes);
app.use("/api/profile", routes_1.UserRoutes);
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "health is okay",
        timestamp: new Date().toISOString(),
    });
});
exports.default = app;
