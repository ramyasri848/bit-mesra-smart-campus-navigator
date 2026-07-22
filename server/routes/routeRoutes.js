import express from "express";

import { getShortestRoute }
from "../controllers/routeController.js";

import { protect }
from "../middleware/authMiddleware.js";

const router = express.Router();

router.post(
    "/shortest-path",
    protect,
    getShortestRoute
);

export default router;