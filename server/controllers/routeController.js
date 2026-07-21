import Building from "../models/Building.js";
import Road from "../models/Road.js";
import fs from "fs-extra";
import { execFile } from "child_process";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const getShortestRoute = async (req, res) => {
    try {

        const buildings = await Building.find();
        const roads = await Road.find();

        const graphData = {
            buildings,
            roads
        };

        // Path to cpp-engine
        const cppDir = path.join(__dirname, "../../cpp-engine");

        // Create graph.json
        await fs.writeJson(
            path.join(cppDir, "graph.json"),
            graphData,
            { spaces: 2 }
        );

        // Run campus.exe
        execFile(
            path.join(cppDir, "campus.exe"),
            (error, stdout, stderr) => {

                if (error) {
                    return res.status(500).json({
                        success: false,
                        message: error.message
                    });
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
            message: error.message
        });

    }
};