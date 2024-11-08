/*
 * @param {number[]} nums - The input array of non-negative integers.
 * @param {number} maximumBit - The number of bits for the maximum XOR constraint.
 * @return {number[]} - An array containing the result of each query.
 */
var getMaximumXor = function (nums, maximumBit) {
  // maxK is the maximum value of k we can use given maximumBit
  // It is calculated as (2^maximumBit) - 1, which has all bits set to 1 up to maximumBit
  const maxK = (1 << maximumBit) - 1; // Example: if maximumBit = 2, maxK = 3 (binary: 11)

  // Compute the initial XOR of all elements in nums
  // This will serve as the starting xor_sum
  let xor_sum = nums.reduce((acc, num) => acc ^ num, 0);

  // Initialize an empty array to store the result of each query
  const answer = [];

  // Loop from the last element to the first element in nums
  // We perform n queries where n is the length of nums
  for (let i = nums.length - 1; i >= 0; i--) {
    // Calculate the value of k that maximizes the XOR with xor_sum for this query
    // maxK XOR xor_sum produces the highest possible result within the given bit limit
    answer.push(maxK ^ xor_sum);

    // Update xor_sum by "removing" the last element in the array
    // This is achieved by XORing xor_sum with the current element
    // This removal prepares xor_sum for the next iteration
    xor_sum ^= nums[i];
  }

  // Return the result array with answers for each query in order of the queries
  return answer;
};
