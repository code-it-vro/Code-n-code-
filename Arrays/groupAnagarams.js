
///////////////////////// PROBLEM STATEMENT //////////////////////////

// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

 
// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.


////////////////////////// SOLUTION //////////////////////////////

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = []; // Array to store the final answer
  const umap = {}; // Object to map sorted strings to their corresponding anagrams

  for (const str of strs) {
    // Traverse through each string in the input array
    const sortedStr = str.split("").sort().join(""); // Sort the string to form the key
    if (!umap[sortedStr]) {
      umap[sortedStr] = []; // Initialize an empty array if the key doesn't exist
    }
    umap[sortedStr].push(str); // Push the original string into the corresponding array
  }

  for (const key in umap) {
    // Iterate over the keys in the map
    answer.push(umap[key]); // Add the anagram groups to the final answer
  }

  return answer; // Return the grouped anagrams
};
