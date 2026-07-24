import { useEffect, useState } from "react";
import axios from "axios";

const EmergencyNavigation = () => {

    const [places, setPlaces] = useState([]);

    useEffect(() => {

        const fetchPlaces = async () => {

            try {

                const token = localStorage.getItem("token");

                const response = await axios.get(
                    "http://localhost:5000/api/emergency",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );

                setPlaces(response.data.data);

            } catch (error) {

                console.log(error);

            }

        };

        fetchPlaces();

    }, []);

    return (

        <div style={{ padding: "20px", background: "white", marginBottom: "20px" }}>

            <h2>Emergency Navigation</h2>

            {places.map((place) => (

                <div key={place._id}>

                    <h4>{place.name}</h4>

                    <p>{place.category}</p>

                </div>

            ))}

        </div>

    );

};

export default EmergencyNavigation;