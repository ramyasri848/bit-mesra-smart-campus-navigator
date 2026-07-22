import express from "express";
import {
    createSchedule,
    getSchedules,
    getNextClass
} from "../controllers/scheduleController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createSchedule);

router.get("/", protect, getSchedules);

router.get(
    "/next",
    protect,
    getNextClass
);



export default router;