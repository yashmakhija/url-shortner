import express from "express";
import cors from "cors";
import { authRoutes, UrlRoutes } from "./routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/url", UrlRoutes);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "health is okay",
    timestamp: new Date().toISOString(),
  });
});

export default app;
