import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { authRoutes, UrlRoutes, UserRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/url", UrlRoutes);
app.use("/api/profile", UserRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "health is okay",
    timestamp: new Date().toISOString(),
  });
});

export default app;
