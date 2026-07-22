import Schedule from "../models/Schedule.js";

export const createSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.create(req.body);

    res.status(201).json({
      success: true,
      data: schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();

    res.json({
      success: true,
      count: schedules.length,
      data: schedules,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
export const getNextClass = async (req, res) => {

    try {

        const today = new Date().toLocaleDateString("en-US", {
            weekday: "long"
        });

        const currentTime = new Date().toTimeString().slice(0, 5);

        const nextClass = await Schedule.findOne({

            day: today,

            startTime: { $gte: currentTime }

        }).sort({ startTime: 1 });

        if (!nextClass) {

            return res.json({

                success: true,

                message: "No more classes today"

            });

        }

        res.json({

            success: true,

            data: nextClass

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};