import Building from "../models/Building.js";

export const getEmergencyLocations = async (req, res) => {

    try {

        const emergencyBuildings = await Building.find({
            category: {
                $in: [
                    "Medical",
                    "Security",
                    "Emergency Exit"
                ]
            }
        });

        res.json({
            success: true,
            data: emergencyBuildings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};