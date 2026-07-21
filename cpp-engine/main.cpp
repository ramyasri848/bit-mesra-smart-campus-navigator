#include "Graph.h"

int main()
{
    Graph campus;

    campus.addBuilding("Hostel 8");
    campus.addBuilding("CSE");
    campus.addBuilding("Library");
    campus.addBuilding("Cafeteria");

    campus.addRoad("Hostel 8", "CSE", 350);
    campus.addRoad("CSE", "Library", 200);
    campus.addRoad("Library", "Cafeteria", 150);
    campus.addRoad("Hostel 8", "Cafeteria", 500);

    campus.displayGraph();

    campus.dijkstra(
        "Hostel 8",
        "Library"
    );

    return 0;
}