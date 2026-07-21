import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import buildingRoutes from "./routes/buildingRoutes.js";
import roadRoutes from "./routes/roadRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/buildings", buildingRoutes);
app.use("/api/roads", roadRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Backend is running successfully!",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});