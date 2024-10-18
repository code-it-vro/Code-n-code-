// Function to count the number of subsets whose bitwise OR equals the maximum possible OR of all elements
var countMaxOrSubsets = function (nums) {
  // Calculate the maximum OR value possible by combining all numbers in nums
  // The OR operation will accumulate the bits that can be set in the final OR
  let maxOR = nums.reduce((acc, num) => acc | num, 0);

  // Start the backtracking process to explore all subsets
  return backtrack(nums, maxOR, 0, 0);
};

// Helper function to perform the backtracking
function backtrack(nums, maxOR, index, currentOR) {
  // Base case: if we have processed all elements, check if the current OR equals maxOR
  if (index === nums.length) {
    return currentOR === maxOR ? 1 : 0; // Return 1 if valid subset, otherwise 0
  }

  // Recursive case: explore both possibilities for each number in nums:
  // 1. Include the current number in the subset and OR it with currentOR
  let include = backtrack(nums, maxOR, index + 1, currentOR | nums[index]);

  // 2. Exclude the current number and keep the OR value unchanged
  let exclude = backtrack(nums, maxOR, index + 1, currentOR);

  // Return the sum of the subsets from both including and excluding the current number
  return include + exclude;
}
