import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import express from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";
import compression from "compression";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import xss from "xss-clean";
import { router as routerUser } from "./routes/userRoutes.js";
import { router as routerBooks } from "./routes/bookRoutes.js";
const app = express();

// 1. Middlewares
// Implement CORS
app.use(cors());

// Set security HTTP headers
app.use(helmet());

if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "60kb" }));
app.use(cookieParser());

// Data sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use(compression());

// app.use((req, res, next) => {
//   req.requestTime = new Date().toISOString();

//   next();
// });

// Routes
app.use("/api/v1/users", routerUser);
app.use("/api/v1/users", routerBooks);

export default app;
