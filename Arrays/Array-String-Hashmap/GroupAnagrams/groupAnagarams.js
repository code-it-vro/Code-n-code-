

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
