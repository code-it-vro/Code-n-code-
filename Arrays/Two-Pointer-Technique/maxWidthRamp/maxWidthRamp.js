/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let n = nums.length; // Store size of the input array nums
  let arr = new Array(n); // Initialize an array 'arr' of the same size as nums

  // Step 1: Populate 'arr' to store the largest number from the current index to the end
  // arr[j] = maximum of nums[j...n-1] (to track potential valid 'j' positions)
  arr[n - 1] = nums[n - 1]; // Last element of arr is the last element of nums
  for (let j = n - 2; j >= 0; j--) {
    // Traverse nums from the second last element to the start
    arr[j] = Math.max(arr[j + 1], nums[j]);
    // arr[j] stores the max value between arr[j+1] and nums[j]
  }

  /*
    Example:
    nums = [9, 8, 1, 0, 1, 9, 4, 0, 4, 1]
    arr  = [9, 9, 9, 9, 9, 9, 4, 4, 4, 1]  (after this loop)
    */

  // Step 2: Traverse nums and arr to find the maximum width ramp
  let ans = 0; // This will store the result (maximum width)
  let i = 0; // 'i' will be used to track the starting index of a valid ramp
  let j = 0; // 'j' will be used to track the ending index of a valid ramp

  // Traverse from the start of the array to check possible ramps
  while (j < n) {
    // Move 'i' forward until nums[i] is less than or equal to arr[j]
    // (we want the smallest 'i' such that nums[i] <= nums[j])
    while (i < j && nums[i] > arr[j]) {
      i++; // Increment 'i' to find a valid start of the ramp
    }
    // Now, i and j form a valid ramp if nums[i] <= arr[j]
    // Update the answer to the maximum width between i and j
    ans = Math.max(ans, j - i);
    j++; // Move 'j' to explore wider ramps
  }

  /*
    Example Walkthrough:
    nums = [6, 0, 8, 2, 1, 5]
    arr  = [8, 8, 8, 5, 5, 5]

    i=0, j=0 -> nums[0] = 6, arr[0] = 8 (valid ramp)
    i=0, j=1 -> nums[0] = 6, arr[1] = 8 (valid ramp)
    i=0, j=2 -> nums[0] = 6, arr[2] = 8 (valid ramp, ans = 2)
    i=0, j=3 -> nums[0] = 6, arr[3] = 5 (invalid, i incremented)
    i=1, j=3 -> nums[1] = 0, arr[3] = 5 (valid ramp, ans = 2)
    i=1, j=4 -> nums[1] = 0, arr[4] = 5 (valid ramp, ans = 3)
    i=1, j=5 -> nums[1] = 0, arr[5] = 5 (valid ramp, ans = 4)
    Final ans = 4
    */

  return ans; // Return the maximum width ramp found
};
