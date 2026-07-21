import { MapContainer, TileLayer } from "react-leaflet";

const CampusMap = () => {
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
                attribution='&copy; OpenStreetMap contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    );
};

export default CampusMap;