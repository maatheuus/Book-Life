import express from "express";
// import User from "./models/userModel";
import morgan from "morgan";
import { router } from "./routes/userRoutes.js";
const app = express();

// 1. Middleware
if (process.env.NODE_DEV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

app.use((req, res, next) => {
  console.log("from the middleware");
  next();
});

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// app.get("http://localhost:3000/api/v1/auth", (req, res) => {
//   console.log("get user");
// });

app.use("/api/v1/users", router);

export default app;
