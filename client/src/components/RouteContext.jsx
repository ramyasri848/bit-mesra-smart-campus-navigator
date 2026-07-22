import { createContext, useState } from "react";

export const RouteContext = createContext();

export const RouteProvider = ({ children }) => {

    const [routePath, setRoutePath] = useState([]);
    const [distance, setDistance] = useState(0);
    const [walkingTime, setWalkingTime] = useState(0);

    return (
        <RouteContext.Provider
            value={{
                routePath,
                setRoutePath,
                distance,
                setDistance,
                walkingTime,
                setWalkingTime
            }}
        >
            {children}
        </RouteContext.Provider>
    );
};