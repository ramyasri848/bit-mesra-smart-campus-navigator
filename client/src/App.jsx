import Notifications from "./components/Notifications";
import NextClass from "./components/NextClass";
import RouteFinder from "./components/RouteFinder";
import EmergencyNavigation from "./components/EmergencyNavigation";
import CampusMap from "./components/CampusMap";
import BuildingSearch from "./components/BuildingSearch";

function App() {

    return (

        <>
            <Notifications />
            <NextClass />
            <RouteFinder />
            <EmergencyNavigation />
            <BuildingSearch />
            <CampusMap />
        </>

    );

}

export default App;