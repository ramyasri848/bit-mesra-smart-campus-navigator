#ifndef GRAPH_H
#define GRAPH_H

#include <iostream>
#include <vector>
#include <unordered_map>
#include <string>

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
};

#endif