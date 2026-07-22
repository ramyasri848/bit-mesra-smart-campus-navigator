import Building from "../models/Building.js";
import Road from "../models/Road.js";

import fs from "fs-extra";
import { exec } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cppPath = path.join(__dirname, "../../cpp-engine");

export const getShortestRoute = async (req, res) => {
  try {
    const { source, destination } = req.body;

    const sourceBuilding = await Building.findById(source);
    const destinationBuilding = await Building.findById(destination);

    const buildings = await Building.find();

    const roads = await Road.find()
      .populate("source")
      .populate("destination");

    const graphData = {
      buildings: [],
      roads: [],
    };

    buildings.forEach((building) => {
      graphData.buildings.push({
        name: building.name,
      });
    });

    roads.forEach((road) => {
      graphData.roads.push({
        sourceName: road.source.name,
        destinationName: road.destination.name,
        distance: road.distance,
      });
    });

    await fs.writeJson(
      path.join(cppPath, "graph.json"),
      graphData,
      { spaces: 2 }
    );

    await fs.writeJson(
      path.join(cppPath, "input.json"),
      {
        source: sourceBuilding.name,
        destination: destinationBuilding.name,
      },
      { spaces: 2 }
    );
exec(
  "campus.exe",
  { cwd: cppPath },
  (error, stdout, stderr) => {

    if (error) {
      console.error(error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }

    if (stderr) {
      console.log(stderr);
    }

    res.json({
      success: true,
      output: stdout
    });

  }
);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};