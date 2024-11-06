/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canSortArray = function (nums) {
  const n = nums.length;

  // Function to get the count of '1's in the binary representation of a number
  const countOnes = (num) => num.toString(2).split("0").join("").length;

  for (let i = 0; i < n; i++) {
    let swapped = false; // Track if any swaps were made in this pass

    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        // Only swap if both numbers have the same count of '1's in binary
        if (countOnes(nums[j]) === countOnes(nums[j + 1])) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          swapped = true; // A swap occurred
        } else {
          return false; // Cannot sort if binary '1' counts differ
        }
      }
    }
    // If no swaps were made, the array is already sorted
    if (!swapped) {
      return true;
    }
  }
  return true;
};
