import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "leaflet/dist/leaflet.css";
import "./leafletIcons";

import { RouteProvider } from "./components/RouteContext";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouteProvider>
            <App />
        </RouteProvider>
    </React.StrictMode>
);