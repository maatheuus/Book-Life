import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import { router } from "./routes/userRoutes.js";

const app = express();

// 1. Middlewares
app.use(helmet());

if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "10kb" }));

app.use(cors());

app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/users", router);

export default app;
