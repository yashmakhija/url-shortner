import express from "express";
import "dotenv/config";

const app = express();

app.use(express.json());

require("dotenv").config();

const port = process.env.port || 3512;

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
