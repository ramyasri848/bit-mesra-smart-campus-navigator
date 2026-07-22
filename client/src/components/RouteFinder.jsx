import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { RouteContext } from "./RouteContext";

const RouteFinder = () => {

  const [buildings, setBuildings] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");

  const {
    setRoutePath,
    setDistance,
    setWalkingTime
  } = useContext(RouteContext);

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

        console.error(error);

      }

    };

    fetchBuildings();

  }, []);

  const findRoute = async () => {

    if (!source || !destination) {

      alert("Please select both source and destination.");
      return;

    }

    try {

      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:5000/api/routes/shortest-path",
        {
          source,
          destination
        },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      console.log("Backend Response:", response.data);

      setRoutePath(response.data.path || []);
      setDistance(response.data.distance || 0);
      setWalkingTime(response.data.walkingTime || 0);

    } catch (error) {

      console.error(error);

      if (error.response) {

        alert(error.response.data.message);

      } else {

        alert("Unable to connect to the server.");

      }

    }

  };

  return (

    <div
      style={{
        padding: "20px",
        background: "#ffffff"
      }}
    >

      <h2>Shortest Route Finder</h2>

      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
      >

        <option value="">
          Select Source
        </option>

        {buildings.map((building) => (

          <option
            key={building._id}
            value={building._id}
          >
            {building.name}
          </option>

        ))}

      </select>

      <br />
      <br />

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >

        <option value="">
          Select Destination
        </option>

        {buildings.map((building) => (

          <option
            key={building._id}
            value={building._id}
          >
            {building.name}
          </option>

        ))}

      </select>

      <br />
      <br />

      <button onClick={findRoute}>
        Find Shortest Route
      </button>

    </div>

  );

};

export default RouteFinder;