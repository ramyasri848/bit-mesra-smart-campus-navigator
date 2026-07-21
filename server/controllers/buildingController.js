import Building from "../models/Building.js";

// Create Building
export const createBuilding = async (req, res) => {
  try {
    const building = await Building.create(req.body);

    res.status(201).json({
      success: true,
      message: "Building created successfully",
      data: building,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Buildings
export const getBuildings = async (req, res) => {
  try {
    const buildings = await Building.find().sort({ name: 1 });

    res.status(200).json({
      success: true,
      count: buildings.length,
      data: buildings,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};