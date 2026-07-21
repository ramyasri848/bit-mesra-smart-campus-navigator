#ifndef GRAPH_H
#define GRAPH_H

#include <iostream>
#include <vector>
#include <unordered_map>
#include <queue>
#include <limits>
#include <string>
#include <algorithm>

using namespace std;

class Graph
{
private:
    unordered_map<string, vector<pair<string, int>>> adjacencyList;

public:
    void addBuilding(string name);

    void addRoad(string source,
                 string destination,
                 int distance);

    void displayGraph();

    void dijkstra(string source,
                  string destination);
};

#endif