#include "Graph.h"
#include "Trie.h"

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

    campus.dijkstra("Hostel 8", "Library");

    campus.bfs("Hostel 8");

    campus.dfs("Hostel 8");

    cout << "\n===== Trie Search =====\n\n";

    Trie trie;

    trie.insert("Library");
    trie.insert("Library Block A");
    trie.insert("Library Block B");
    trie.insert("Lab 101");
    trie.insert("Lab 202");

    vector<string> result = trie.searchPrefix("Lib");

    for(string building : result)
    {
        cout << building << endl;
    }

    return 0;
}