/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function (nums, p) {
  // Step 1: Calculate total sum of the array and remainder when divided by p
  let totalSum = nums.reduce((acc, num) => acc + num, 0);
  let remainder = totalSum % p;

  // If remainder is 0, the entire array is already divisible by p
  if (remainder === 0) return 0;

  // Step 2: Initialize prefixSum and map to store remainders with indices
  let prefixSum = 0;
  let map = new Map();
  map.set(0, -1); // Handle edge case for subarrays starting from index 0

  // Step 3: Track the minimum subarray length that makes sum divisible by p
  let minLength = nums.length;

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];

    // Step 4: Compute current remainder and target remainder (avoid negative by adding p)
    let currentRem = prefixSum % p;
    let targetRem = (currentRem - remainder + p) % p;

    // Step 5: Check if target remainder exists in map, update minimum length
    if (map.has(targetRem)) {
      minLength = Math.min(minLength, i - map.get(targetRem));
    }

    // Update the map with current remainder
    map.set(currentRem % p, i);
  }
  // Return the result: If minLength is unchanged, return -1
  return minLength === nums.length ? -1 : minLength;
};
