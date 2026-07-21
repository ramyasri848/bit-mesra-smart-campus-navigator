#include "Trie.h"

Trie::Trie()
{
    root = new TrieNode();
}

void Trie::insert(string word)
{
    TrieNode* current = root;

    for(char ch : word)
    {
        if(current->children.find(ch) == current->children.end())
        {
            current->children[ch] = new TrieNode();
        }

        current = current->children[ch];
    }

    current->isEndOfWord = true;
}

void Trie::collectWords(
    TrieNode* node,
    string word,
    vector<string>& result)
{
    if(node->isEndOfWord)
    {
        result.push_back(word);
    }

    for(auto child : node->children)
    {
        collectWords(
            child.second,
            word + child.first,
            result
        );
    }
}

vector<string> Trie::searchPrefix(string prefix)
{
    TrieNode* current = root;

    for(char ch : prefix)
    {
        if(current->children.find(ch) == current->children.end())
        {
            return {};
        }

        current = current->children[ch];
    }

    vector<string> result;

    collectWords(current, prefix, result);

    return result;
}