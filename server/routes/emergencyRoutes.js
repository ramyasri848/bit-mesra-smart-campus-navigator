import express from "express";
import { getEmergencyLocations } from "../controllers/emergencyController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getEmergencyLocations);

export default router;