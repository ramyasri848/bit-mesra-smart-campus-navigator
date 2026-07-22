import Building from "../models/Building.js";

export const getShortestRoute = async (req, res) => {

  try {

    const { source, destination } = req.body;

    const sourceBuilding = await Building.findById(source);

    const destinationBuilding = await Building.findById(destination);

    if (!sourceBuilding || !destinationBuilding) {
      return res.status(404).json({
        success: false,
        message: "Building not found"
      });
    }

    res.json({
      success: true,
      source: sourceBuilding.name,
      destination: destinationBuilding.name,
      message: "Source and destination received successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }

};