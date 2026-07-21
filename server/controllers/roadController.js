import Road from "../models/Road.js";

// Create Road
export const createRoad = async (req, res) => {
  try {
    const road = await Road.create(req.body);

    res.status(201).json({
      success: true,
      message: "Road created successfully",
      data: road,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Roads
export const getRoads = async (req, res) => {
  try {
    const roads = await Road.find()
      .populate("source", "name code")
      .populate("destination", "name code");

    res.status(200).json({
      success: true,
      count: roads.length,
      data: roads,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};