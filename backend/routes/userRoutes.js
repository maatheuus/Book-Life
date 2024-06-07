import { Router } from "express";
import { login, signup, findUser } from "../controllers/authController.js";

export const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.get("/user", findUser);
