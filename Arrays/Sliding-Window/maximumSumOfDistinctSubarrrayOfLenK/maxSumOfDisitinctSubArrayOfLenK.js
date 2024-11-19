/**
 * @param {number[]} nums - Array of integers
 * @param {number} k - Size of the subarray
 * @return {number} - Maximum subarray sum with distinct elements, or 0 if none
 */
var maximumSubarraySum = function (nums, k) {
  const s = new Set(); // Set to track unique elements in the current window
  let result = 0; // Stores the maximum sum of subarrays meeting conditions
  let currSum = 0; // Current sum of the subarray
  let j = 0; // Left pointer for the sliding window

  // Loop through the array using the right pointer `i`
  for (let i = 0; i < nums.length; i++) {
    // If the current element is already in the set, remove elements from the left
    while (s.has(nums[i])) {
      currSum -= nums[j]; // Subtract the value at the left pointer
      s.delete(nums[j]); // Remove the element from the set
      j++; // Move the left pointer forward
    }

    // Add the current element to the set and include it in the current sum
    s.add(nums[i]);
    currSum += nums[i];

    // Check if the subarray has reached size `k`
    if (s.size === k) {
      result = Math.max(result, currSum); // Update the result if this subarray's sum is larger
      currSum -= nums[j]; // Slide the window forward by removing the leftmost element
      s.delete(nums[j]); // Remove the element from the set
      j++; // Move the left pointer forward
    }
  }

  return result; // Return the maximum subarray sum
};
