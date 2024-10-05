/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // Step 1: Initialize variables for lengths of s1 and s2
  let n = s1.length;
  let m = s2.length;

  // Edge case: If s1 is longer than s2, no inclusion is possible
  if (n > m) return false;

  // Step 2: Create frequency maps for s1 and s2's sliding window
  let map1 = new Map(); // Frequency map for characters in s1
  let map2 = new Map(); // Sliding window frequency map for s2

  // Fill map1 with the frequency of characters in s1
  for (let i of s1) {
    map1.set(i, (map1.get(i) || 0) + 1);
  }

  // Step 3: Helper function to compare two maps
  // This checks if map1 and map2 have the same frequencies for each character
  const checkMapAreEqual = function (map1, map2) {
    if (map1.size !== map2.size) return false; // Maps should have the same size

    for (let [key, value] of map1) {
      if (map2.get(key) !== value) {
        // If frequencies differ for any character
        return false;
      }
    }
    return true;
  };

  // Step 4: Start the sliding window process over s2
  let i = 0; // Left boundary of the window
  let j = 0; // Right boundary of the window

  // Iterate through s2 using a sliding window
  while (j < m) {
    // Add current character to the sliding window map (map2)
    map2.set(s2[j], (map2.get(s2[j]) || 0) + 1);

    // Step 5: When window size exceeds n, remove the left character
    if (j - i + 1 > n) {
      let charToRemove = s2[i];
      if (map2.get(charToRemove) === 1) {
        map2.delete(charToRemove); // Remove character if count becomes 0
      } else {
        map2.set(charToRemove, map2.get(charToRemove) - 1); // Decrease count of the character
      }
      i++; // Slide the left boundary of the window
    }

    // Step 6: Check if current window is a permutation of s1
    if (j - i + 1 === n && checkMapAreEqual(map1, map2)) {
      return true; // Return true if a permutation is found
    }

    j++; // Slide the right boundary of the window
  }

  // Return false if no permutation of s1 is found in s2
  return false;
};
