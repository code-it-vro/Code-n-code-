/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */

var canArrange = function (arr, k) {
  // Create an array to count the frequencies of remainders when divided by k
  let remainderFreq = new Array(k).fill(0); // O(K)

  // Loop through the array to calculate the frequency of each remainder
  for (let num of arr) {
    // Calculate the remainder and ensure it's non-negative
    let rem = ((num % k) + k) % k;
    remainderFreq[rem]++;
  }

  // For pairs where the sum is divisible by k, the frequency of remainder 0 must be even
  if (remainderFreq[0] % 2 !== 0) {
    return false; // If odd, return false as pairs cannot be formed
  }

  // Check for all other remainders from 1 to k/2
  for (let rem = 1; rem <= Math.floor(k / 2); rem++) {
    let counterHalf = k - rem; // Find the complement remainder
    // The count of pairs for remainder `rem` must equal that of `k - rem`
    if (remainderFreq[counterHalf] !== remainderFreq[rem]) {
      return false; // If counts don't match, return false
    }
  }

  // If all checks are satisfied, return true
  return true; // Pairs can be formed such that their sums are divisible by k
};
