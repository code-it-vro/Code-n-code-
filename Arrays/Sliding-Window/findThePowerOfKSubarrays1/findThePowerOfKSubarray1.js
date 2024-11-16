/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  // Initialize an empty array to store the results for each subarray
  const answer = [];
  function isConsecutive(arr) {
    // Loop through the array and verify that every element is exactly one greater than the previous
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] != arr[i - 1] + 1) {
        return false; // Return false if the condition breaks
      }
    }
    return true; // Return true if the entire array is consecutive
  }

  // Loop through the input array to generate subarrays of size k
  for (let i = 0; i <= nums.length - k; i++) {
    // Extract the current subarray of size k
    const tempArray = nums.slice(i, i + k);

    // Check if the subarray is consecutive
    if (isConsecutive(tempArray)) {
      // If consecutive, add the maximum element to the result
      answer.push(Math.max(...tempArray));
    } else {
      // If not consecutive, add -1 to the result
      answer.push(-1);
    }
  }

  // Return the final result array
  return answer;
};
