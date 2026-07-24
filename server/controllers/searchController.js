import Building from "../models/Building.js";

export const searchBuildings = async (req, res) => {
    try {

        const query = req.query.q;

        const buildings = await Building.find({
            name: {
                $regex: "^" + query,
                $options: "i"
            }
        });

        res.json({
            success: true,
            data: buildings
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};