import express from "express";
import {
  createNotification,
  getNotifications,
} from "../controllers/notificationController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createNotification);
router.get("/", protect, getNotifications);

export default router;