import RouteFinder from "./components/RouteFinder";
import CampusMap from "./components/CampusMap";
import { RouteProvider } from "./components/RouteContext";

function App() {
  return (
    <RouteProvider>
      <RouteFinder />
      <CampusMap />
    </RouteProvider>
  );
}

export default App;