#include "Graph.h"

void Graph::addBuilding(string name)
{
    adjacencyList[name];
}

void Graph::addRoad(string source,
                    string destination,
                    int distance)
{
    adjacencyList[source].push_back({destination, distance});
    adjacencyList[destination].push_back({source, distance});
}

void Graph::displayGraph()
{
    cout << "\n===== Campus Graph =====\n\n";

    for (auto building : adjacencyList)
    {
        cout << building.first << " -> ";

        for (auto road : building.second)
        {
            cout << "("
                 << road.first
                 << ", "
                 << road.second
                 << "m) ";
        }

        cout << endl;
    }
}