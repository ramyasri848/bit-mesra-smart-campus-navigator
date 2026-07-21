import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline
} from "react-leaflet";
import axios from "axios";

const CampusMap = () => {

  const [buildings, setBuildings] = useState([]);
  const [roads, setRoads] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        const token = localStorage.getItem("token");

        const buildingResponse = await axios.get(
          "http://localhost:5000/api/buildings",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        const roadResponse = await axios.get(
          "http://localhost:5000/api/roads",
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );

        setBuildings(buildingResponse.data.data);
        setRoads(roadResponse.data.data);

      } catch (error) {
        console.log(error);
      }

    };

    fetchData();

  }, []);

  const getCoordinates = (id) => {

    const building = buildings.find(
      (b) => b._id === id
    );

    if (!building) return null;

    return [
      building.latitude,
      building.longitude
    ];

  };

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
        attribution="© OpenStreetMap contributors"
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

      {roads.map((road) => {

        const source = getCoordinates(
          road.source._id
        );

        const destination = getCoordinates(
          road.destination._id
        );

        if (!source || !destination) return null;

        return (
          <Polyline
            key={road._id}
            positions={[
              source,
              destination
            ]}
          />
        );

      })}

    </MapContainer>

  );

};

export default CampusMap;