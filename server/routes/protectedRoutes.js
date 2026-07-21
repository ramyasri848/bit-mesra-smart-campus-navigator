import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";

const router = express.Router();

// Any logged-in user
router.get("/profile", protect, (req, res) => {
  res.json({
    success: true,
    message: "Welcome!",
    user: req.user
  });
});

// Student only
router.get(
  "/student",
  protect,
  authorizeRoles("student"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Student"
    });
  }
);

// Faculty only
router.get(
  "/faculty",
  protect,
  authorizeRoles("faculty"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Faculty"
    });
  }
);

// Admin only
router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({
      success: true,
      message: "Welcome Admin"
    });
  }
);

export default router;