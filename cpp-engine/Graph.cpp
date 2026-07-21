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

void Graph::dijkstra(string source,
                     string destination)
{
    unordered_map<string, int> distance;
    unordered_map<string, string> previous;

    priority_queue<
        pair<int, string>,
        vector<pair<int, string>>,
        greater<pair<int, string>>
    > pq;

    for (auto node : adjacencyList)
    {
        distance[node.first] = numeric_limits<int>::max();
    }

    distance[source] = 0;

    pq.push({0, source});

    while (!pq.empty())
    {
        string current = pq.top().second;
        int currentDistance = pq.top().first;

        pq.pop();

        if (currentDistance > distance[current])
            continue;

        for (auto neighbor : adjacencyList[current])
        {
            string next = neighbor.first;
            int weight = neighbor.second;

            if (distance[current] + weight < distance[next])
            {
                distance[next] = distance[current] + weight;

                previous[next] = current;

                pq.push({distance[next], next});
            }
        }
    }

    if (distance[destination] == numeric_limits<int>::max())
    {
        cout << "\nNo path found.\n";
        return;
    }

    vector<string> path;

    string current = destination;

    while (current != source)
    {
        path.push_back(current);
        current = previous[current];
    }

    path.push_back(source);

    reverse(path.begin(), path.end());

    cout << "\n===== Shortest Path =====\n\n";

    for (int i = 0; i < path.size(); i++)
    {
        cout << path[i];

        if (i != path.size() - 1)
            cout << " -> ";
    }

    cout << endl;

    cout << "\nShortest Distance : "
         << distance[destination]
         << " meters\n";
}
void Graph::bfs(string start)
{
    queue<string> q;

    set<string> visited;

    q.push(start);

    visited.insert(start);

    cout << "\n===== BFS Traversal =====\n\n";

    while (!q.empty())
    {
        string current = q.front();

        q.pop();

        cout << current << endl;

        for (auto neighbor : adjacencyList[current])
        {
            if (visited.find(neighbor.first) == visited.end())
            {
                visited.insert(neighbor.first);

                q.push(neighbor.first);
            }
        }
    }
}