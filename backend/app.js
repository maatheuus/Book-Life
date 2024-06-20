import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import { router as routerUser } from "./routes/userRoutes.js";
import { router as routerBooks } from "./routes/bookRoutes.js";

const app = express();

// 1. Middlewares
app.use(cors());

app.use(helmet());

if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json({ limit: "60kb" }));

app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use("/api/v1/users", routerUser);
app.use("/api/v1/users", routerBooks);

export default app;
