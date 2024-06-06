import { Router } from "express";
import { signup } from "../controllers/authController.js";

export const router = Router();

router.post("/signup", signup);
