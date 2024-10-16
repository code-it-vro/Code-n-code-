/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let maxHeap = new MaxPriorityQueue({ priority: (x) => x[0] });
  let result = "";

  if (a > 0) maxHeap.enqueue([a, "a"]);
  if (b > 0) maxHeap.enqueue([b, "b"]);
  if (c > 0) maxHeap.enqueue([c, "c"]);

  // Process the heap until we can't add more characters
  while (!maxHeap.isEmpty()) {
    // Dequeue the character with the largest count
    let {
      element: [count1, char1],
    } = maxHeap.dequeue(); // Access element property

    // Check if we can add char1 (ensure no 3 consecutive chars)
    if (
      result.length >= 2 &&
      result[result.length - 1] === char1 &&
      result[result.length - 2] === char1
    ) {
      // If char1 would cause three consecutive, pick the next highest character
      if (maxHeap.isEmpty()) break; // No other option available

      let {
        element: [count2, char2],
      } = maxHeap.dequeue(); // Access element property
      result += char2;
      count2--;

      // Re-enqueue if count2 is still greater than 0
      if (count2 > 0) maxHeap.enqueue([count2, char2]);

      // Re-enqueue char1 because we'll use it later
      maxHeap.enqueue([count1, char1]);
    } else {
      // Add char1 to the result and reduce its count
      result += char1;
      count1--;

      // Re-enqueue char1 if there are still remaining counts
      if (count1 > 0) maxHeap.enqueue([count1, char1]);
    }
  }

  return result;
};
