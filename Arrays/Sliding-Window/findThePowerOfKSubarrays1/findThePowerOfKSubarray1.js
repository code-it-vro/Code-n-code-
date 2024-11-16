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







/////////////////////////// TypeScript solution Below  ////////////////////////////

/**
 * @param {number[]} nums - The input array of integers
 * @param {number} k - The size of the subarray
 * @return {number[]} - The power of all subarrays of size k
 */
// const resultsArray = (nums: number[], k: number): number[] => {
//   const answer: number[] = [];

//   /**
//    * Helper function to check if an array is consecutive.
//    * @param {number[]} arr - A subarray of `nums`.
//    * @return {boolean} - True if the array is consecutive, false otherwise.
//    */
//   function isConsecutive(arr: number[]): boolean {
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] !== arr[i - 1] + 1) {
//         return false;
//       }
//     }
//     return true;
//   }

//   // Iterate through the array to evaluate each subarray of size `k`
//   for (let i = 0; i <= nums.length - k; i++) {
//     const tempArray: number[] = nums.slice(i, i + k);
//     if (isConsecutive(tempArray)) {
//       answer.push(Math.max(...tempArray));
//     } else {
//       answer.push(-1);
//     }
//   }
//   return answer;
// };