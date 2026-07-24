import { useState } from "react";
import axios from "axios";

function BuildingSearch() {

    const [query, setQuery] = useState("");
    const [results, setResults] = useState([]);

    const handleSearch = async (value) => {

        setQuery(value);

        if (!value) {
            setResults([]);
            return;
        }

        const token = localStorage.getItem("token");

        const response = await axios.get(

            `http://localhost:5000/api/search?q=${value}`,

            {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

        );

        setResults(response.data.data);

    };

    return (

        <div>

            <h2>Search Buildings</h2>

            <input
                type="text"
                value={query}
                placeholder="Search..."
                onChange={(e)=>handleSearch(e.target.value)}
            />

            <ul>

                {results.map((building)=>(

                    <li key={building._id}>
                        {building.name}
                    </li>

                ))}

            </ul>

        </div>

    );

}

export default BuildingSearch;