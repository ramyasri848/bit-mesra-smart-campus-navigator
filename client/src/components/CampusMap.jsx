import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from "react-leaflet";
import axios from "axios";

const CampusMap = () => {

  const [buildings, setBuildings] = useState([]);

  useEffect(() => {

    const fetchBuildings = async () => {

      try {

        const token = localStorage.getItem("token");

        const response = await axios.get(
          "http://localhost:5000/api/buildings",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setBuildings(response.data.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchBuildings();

  }, []);

  return (

    <MapContainer
      center={[23.4165, 85.4408]}
      zoom={16}
      style={{
        height: "100vh",
        width: "100%"
      }}
    >

      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {buildings.map((building) => (

        <Marker
          key={building._id}
          position={[
            building.latitude,
            building.longitude
          ]}
        >

          <Popup>

            <h3>{building.name}</h3>

            <p>
              <strong>Code:</strong> {building.code}
            </p>

            <p>
              <strong>Category:</strong> {building.category}
            </p>

            <p>{building.description}</p>

          </Popup>

        </Marker>

      ))}

    </MapContainer>

  );

};

export default CampusMap;