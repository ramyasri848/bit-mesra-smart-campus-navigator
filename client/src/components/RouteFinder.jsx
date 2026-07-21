import { useEffect, useState } from "react";
import axios from "axios";

const RouteFinder = () => {

  const [buildings, setBuildings] = useState([]);
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [result, setResult] = useState("");

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

  const findRoute = async () => {

    try {

      const token = localStorage.getItem("token");

      const response = await axios.get(
        "http://localhost:5000/api/routes/shortest-path",
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setResult(response.data.output);

    } catch (error) {

      console.log(error);

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

        <option value="">Select Source</option>

        {buildings.map((building) => (

          <option
            key={building._id}
            value={building._id}
          >
            {building.name}
          </option>

        ))}

      </select>

      <br /><br />

      <select
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      >

        <option value="">Select Destination</option>

        {buildings.map((building) => (

          <option
            key={building._id}
            value={building._id}
          >
            {building.name}
          </option>

        ))}

      </select>

      <br /><br />

      <button onClick={findRoute}>
        Find Shortest Route
      </button>

      <pre>
        {result}
      </pre>

    </div>

  );

};

export default RouteFinder;