# Make Sum Divisible by P

## Given an array of positive integers nums, remove the smallest subarray (possibly empty) such that the sum of the remaining elements is divisible by p. It is not allowed to remove the whole array.Return the length of the smallest subarray that you need to remove, or -1 if it's impossible.A subarray is defined as a contiguous block of elements in the array.


### Example 1:

Input: nums = [3,1,4,2], p = 6
Output: 1
Explanation: The sum of the elements in nums is 10, which is not divisible by 6. We can remove the subarray [4], and the sum of the remaining elements is 6, which is divisible by 6.

### Example 2:

Input: nums = [6,3,5,2], p = 9
Output: 2
Explanation: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

### Example 3:

Input: nums = [1,2,3], p = 3
Output: 0
Explanation: Here the sum is 6. which is already divisible by 3. Thus we do not need to remove anything.
 

### Constraints:

1 <= nums.length <= 105
1 <= nums[i] <= 109
1 <= p <= 109

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Approach

### Initial Setup:
1. First, calculate the total sum of the array `nums`.
2. Find the remainder of the total sum when divided by `p` (i.e., `rem = sum(nums) % p`).

### Edge Case:
- If `rem == 0`, return `0` because the sum is already divisible by `p`.

### Prefix Sum Modulus Technique:
- Use a prefix sum to track the cumulative sum of the array as we iterate through it.
- Store the mod values of prefix sums in a map, which will help us quickly find subarrays whose removal would make the remaining sum divisible by `p`.

### Target Remainder:
- For each index `i`, calculate the current prefix sum `currentSum`. The goal is to find the smallest subarray whose sum, when removed, leaves a remainder of `rem`.
- To do this, we check if there exists a prefix sum at some earlier index that, when removed, leaves a remainder equal to `rem`.

### Track Minimum Length:
- Keep track of the smallest subarray whose sum equals `rem`. Use a map to store previous prefix sums and their mod values.

### Final Result:
- After iterating through the array, return the length of the smallest subarray whose removal makes the remaining sum divisible by `p`. If no such subarray exists, return `-1`.

---

# Explanation of Key Steps:

1. **Calculate the total sum** of the array and determine the remainder when divided by `p`. 
   - If the remainder is `0`, we don't need to remove any subarray since the total sum is already divisible by `p`.

2. **Prefix sum approach**:
   - We use a running sum (`prefixSum`) to keep track of sums from the beginning of the array up to the current index.
   - For each `prefixSum`, we calculate its remainder when divided by `p` (`currentRem`).

3. **Target remainder**:
   - We calculate the `targetRem` by taking `(currentRem - remainder + p) % p` to avoid any negative values. This step ensures we are dealing with non-negative remainders.

4. **Map usage**:
   - We store remainders as keys and their indices as values in the map.
   - If we encounter a previously seen remainder (i.e., the `targetRem`), we calculate the subarray length and check if it's the minimum.

5. **Return value**:
   - If no valid subarray is found, we return `-1`. Otherwise, we return the minimum length of the subarray that can be removed to make the remaining array sum divisible by `p`.

---

## Time Complexity
- **Time Complexity**: `O(n)`, where `n` is the length of the array.
  - Calculating the total sum takes `O(n)`.
  - Iterating through the array and updating the map takes `O(n)`.

## Space Complexity
- **Space Complexity**: `O(min(n, p))`.
  - In the worst case, the size of the map can grow to `p`, but it's usually bounded by the length of the array `n`.



# Table Breakdown:

### For example 

**Example 2:**

**Input**: nums = **[6,3,5,2]**, p = **9**
**Output**: 2
**Explanation**: We cannot remove a single element to get a sum divisible by 9. The best way is to remove the subarray [5,2], leaving us with [6,3] with sum 9.

&nbsp;

&nbsp;

| Index | nums[i] | prefixSum | prefixSum % p (currentRem) | targetRem                    | Map State                            | Subarray Found?                  | Min Length     |
|-------|---------|-----------|----------------------------|------------------------------|--------------------------------------|----------------------------------|----------------|
| -     | -       | 0         | 0                          | -                            | { 0: -1 }                            | -                                | -              |
| 0     | 6       | 6         | 6                          | (6 - 7 + 9) % 9 = 8          | { 0: -1, 6: 0 }                      | No                               | -              |
| 1     | 3       | 9         | 0                          | (0 - 7 + 9) % 9 = 2          | { 0: 1, 6: 0 }                      | No                               | -              |
| 2     | 5       | 14        | 5                          | (5 - 7 + 9) % 9 = 7          | { 0: 1, 6: 0, 5: 2 }                | No                               | -              |
| 3     | 2       | 16        | 7                          | (7 - 7 + 9) % 9 = 0          | { 0: 1, 6: 0, 5: 2, 7: 3 }          | Yes (from index 1 to 3)          | 3 - 1 = 2      |


### Detailed Breakdown:

1. **At index -1 (initial state):**
   - The prefix sum is initialized as `0`, and we store `{0: -1}` in the map, representing that before the array starts, the remainder `0` occurs at a hypothetical index `-1`.

2. **At index 0:**
   - The element is `6`, so the new prefix sum becomes `6`.
   - `currentRem = 6 % 9 = 6`.
   - We calculate `targetRem = (currentRem - remainder + p) % p = (6 - 7 + 9) % 9 = 8`.
   - Since `8` is not in the map, no subarray is found, so we add `{6: 0}` to the map.

3. **At index 1:**
   - The element is `3`, so the prefix sum becomes `9`.
   - `currentRem = 9 % 9 = 0`.
   - We calculate `targetRem = (0 - 7 + 9) % 9 = 2`.
   - Since `2` is not in the map, no subarray is found, so we update the map with `{0: 1}`.

4. **At index 2:**
   - The element is `5`, so the prefix sum becomes `14`.
   - `currentRem = 14 % 9 = 5`.
   - We calculate `targetRem = (5 - 7 + 9) % 9 = 7`.
   - Since `7` is not in the map, no subarray is found, so we update the map with `{5: 2}`.

5. **At index 3:**
   - The element is `2`, so the prefix sum becomes `16`.
   - `currentRem = 16 % 9 = 7`.
   - We calculate `targetRem = (7 - 7 + 9) % 9 = 0`.
   - Since `0` is in the map at index `1`, a valid subarray is found from index `1` to index `3`.
   - The length of this subarray is `3 - 1 = 2`, which is the minimum length of elements we need to remove.