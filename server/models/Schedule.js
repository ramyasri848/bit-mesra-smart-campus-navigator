import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    subject: {
      type: String,
      required: true,
    },
    faculty: {
      type: String,
      required: true,
    },
    classroom: {
      type: String,
      required: true,
    },
    day: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Schedule", scheduleSchema);