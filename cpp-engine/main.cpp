#include "Graph.h"
#include "include/json.hpp"

#include <fstream>

using json = nlohmann::json;

int main()
{
    Graph campus;

    // Read graph.json
    std::ifstream graphFile("graph.json");

    json graphData;

    graphFile >> graphData;

    // Add buildings
    for (auto building : graphData["buildings"])
    {
        campus.addBuilding(building["name"]);
    }

    // Add roads
    for (auto road : graphData["roads"])
    {
        campus.addRoad(
            road["sourceName"],
            road["destinationName"],
            road["distance"]
        );
    }

    // Read input.json
    std::ifstream inputFile("input.json");

    json input;

    inputFile >> input;

    std::string source = input["source"];

    std::string destination = input["destination"];

    // Run Dijkstra
    campus.dijkstra(source, destination);

    return 0;
}