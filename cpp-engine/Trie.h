#ifndef TRIE_H
#define TRIE_H

#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;

class TrieNode
{
public:
    unordered_map<char, TrieNode*> children;
    bool isEndOfWord;

    TrieNode()
    {
        isEndOfWord = false;
    }
};

class Trie
{
private:
    TrieNode* root;

    void collectWords(TrieNode* node,
                      string word,
                      vector<string>& result);

public:
    Trie();

    void insert(string word);

    vector<string> searchPrefix(string prefix);
};

#endif