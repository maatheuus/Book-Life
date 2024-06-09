import { Router } from "express";
import { setFavoriteBooks } from "../controllers/bookController.js";

export const router = Router();

router.post("/bookmarked", setFavoriteBooks);
// router.post("/bookmarked/favorites", favoritesBookmark);
