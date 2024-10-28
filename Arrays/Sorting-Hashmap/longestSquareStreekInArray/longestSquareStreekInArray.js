/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  // Step 1: Sort the array
  nums.sort((a, b) => a - b);

  // Step 2: Initialize a map to keep track of each number's streak
  const streakMap = new Map();
  let maxStreak = 1; // Track the maximum streak length found

  // Step 3: Traverse each number in sorted array
  for (let num of nums) {
    const sqrt = Math.sqrt(num); // Calculate square root of current number

    if (Number.isInteger(sqrt) && streakMap.has(sqrt)) {
      // If the square root exists in the map, extend the streak
      streakMap.set(num, streakMap.get(sqrt) + 1);
    } else {
      // Otherwise, start a new streak
      streakMap.set(num, 1);
    }

    // Update the maximum streak length
    maxStreak = Math.max(maxStreak, streakMap.get(num));
  }

  // Step 4: Return the max streak if it is at least 2, otherwise return -1
  return maxStreak >= 2 ? maxStreak : -1;
};
