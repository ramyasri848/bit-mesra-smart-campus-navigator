import express from "express";
import { searchBuildings } from "../controllers/searchController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, searchBuildings);

export default router;