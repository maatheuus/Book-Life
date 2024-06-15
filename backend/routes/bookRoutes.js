import { Router } from "express";
import {
  setFavoriteBooks,
  getFavoriteBooks,
} from "../controllers/bookController.js";

export const router = Router();

router.post("/bookmarked", setFavoriteBooks);
router.get("/bookmarked/favorites", getFavoriteBooks);
