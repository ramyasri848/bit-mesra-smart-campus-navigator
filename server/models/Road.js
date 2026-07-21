import mongoose from "mongoose";

const roadSchema = new mongoose.Schema(
  {
    source: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Building",
      required: true,
    },

    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Building",
      required: true,
    },

    distance: {
      type: Number,
      required: true,
    },

    walkingTime: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["Open", "Closed"],
      default: "Open",
    },
  },
  {
    timestamps: true,
  }
);

const Road = mongoose.model("Road", roadSchema);

export default Road;