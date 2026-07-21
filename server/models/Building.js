import mongoose from "mongoose";

const buildingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    code: {
      type: String,
      required: true,
      unique: true,
      uppercase: true,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "Academic",
        "Hostel",
        "Library",
        "Lab",
        "Cafeteria",
        "Sports",
        "Medical",
        "Parking",
        "Other",
      ],
      default: "Academic",
    },

    latitude: {
      type: Number,
      required: true,
    },

    longitude: {
      type: Number,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Building = mongoose.model("Building", buildingSchema);

export default Building;