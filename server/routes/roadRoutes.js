import express from "express";

import {
  createRoad,
  getRoads,
} from "../controllers/roadController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin Only
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createRoad
);

// Logged-in Users
router.get(
  "/",
  protect,
  getRoads
);

export default router;