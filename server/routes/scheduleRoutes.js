import express from "express";

import {
  createSchedule,
  getSchedules,
} from "../controllers/scheduleController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSchedule);

router.get("/", protect, getSchedules);

export default router;