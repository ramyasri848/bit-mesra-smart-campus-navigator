import express from "express";

import {
  createBuilding,
  getBuildings,
} from "../controllers/buildingController.js";

import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Admin Only
router.post(
  "/",
  protect,
  authorizeRoles("admin"),
  createBuilding
);

// Logged-in Users
router.get(
  "/",
  protect,
  getBuildings
);

export default router;