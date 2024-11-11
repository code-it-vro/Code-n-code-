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

///////////// Alternate Appraoch //////////////

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = []; // Array to store the final answer
  const umap = {}; // Object to map character count arrays to their corresponding anagrams

  for (const str of strs) {
    const count = new Array(26).fill(0); // Array to store character count (26 lowercase English letters)

    // Count the frequency of each character in the string
    for (const char of str) {
      count[char.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    // Convert the count array to a string key (e.g., "1,2,3" for a specific count of characters)
    const key = count.join(",");

    if (!umap[key]) {
      umap[key] = []; // Initialize an empty array if the key doesn't exist
    }
    umap[key].push(str); // Push the original string into the corresponding array
  }

  // Collect the grouped anagrams from the map
  for (const key in umap) {
    answer.push(umap[key]); // Add the anagram groups to the final answer
  }

  return answer; // Return the grouped anagrams
};

// Character Count Approach:

// Instead of sorting the string, we can generate a unique key for anagrams by counting the frequency of each character in the string. This would reduce the need to sort each string.
// We can use an array of size 26 (for lowercase English letters) to store the frequency of each character and use it as the key.
// Explanation of the Optimization:

// Sorting takes O(k log k), whereas counting characters takes O(k).
// Thus, using the character count method will make the solution more efficient when the string lengths are large.
