/**
 * @param {number[]} candidates - An array of positive integers
 * @return {number} - The size of the largest combination of candidates with a bitwise AND > 0
 */
var largestCombination = function (candidates) {
  let ans = 0; // To store the maximum size of any combination with AND > 0

  // Loop over each bit position from 0 to 31 (to cover all bits in 32-bit numbers)
  for (let i = 0; i < 32; i++) {
    let count = 0; // Counter for numbers that have the i-th bit set to 1

    // Check each candidate number for the i-th bit
    for (let j = 0; j < candidates.length; j++) {
      // (1 << i) creates a number with only the i-th bit set.
      // Example: when i = 1, (1 << 1) gives 2 (binary: 10).
      // When i = 4, (1 << 4) gives 16 (binary: 10000).
      // This allows us to check if the i-th bit in candidates[j] is set.
      if (candidates[j] & (1 << i)) {
        count++; // Increment count if the i-th bit is set in candidates[j]
      }
    }

    // Update ans with the maximum count of numbers having the i-th bit set
    ans = Math.max(count, ans);
  }
  return ans;
};

/*
Example Explanation:
====================
Consider candidates = [16, 17, 71, 62, 12, 24, 14].
Our task is to find the largest combination with bitwise AND > 0.

1. Bitwise Representation:
   - 16 = 10000
   - 17 = 10001
   - 71 = 1000111
   - 62 = 111110
   - 12 = 1100
   - 24 = 11000
   - 14 = 1110

2. Steps:
   - For each bit position (from 0 to 31), count how many numbers have that bit set.
   - Example: For the 4th bit (from the right, zero-indexed), `16`, `17`, `62`, and `24` have this bit set.
   - The count of numbers with the 4th bit set is 4.

3. Result:
   - `ans` will capture the maximum count across all bit positions.
   - In this case, the largest combination with an AND > 0 has size 4.

Explanation of `(1 << i)`:
===========================
- `(1 << i)` means shifting the number `1` left by `i` bits.
  This produces a number with only the i-th bit set to 1.

  Examples:
  - `1 << 0` = 1 (binary: 0001) - checks the 0th bit
  - `1 << 1` = 2 (binary: 0010) - checks the 1st bit
  - `1 << 2` = 4 (binary: 0100) - checks the 2nd bit

- By using `candidates[j] & (1 << i)`, we can check if the i-th bit in `candidates[j]` is set:
  - If the i-th bit in `candidates[j]` is set, `(candidates[j] & (1 << i))` will be non-zero.
  - If the i-th bit is not set, it will result in 0.

In this approach, we efficiently check each bit across all candidates to find the maximum combination size with AND > 0.
*/
