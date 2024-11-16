# Find the Power of K Subarrays 1

You are given an array of integers `nums` of length `n` and a positive integer `k`.

The **power of an array** is defined as:
- Its maximum element if all of its elements are **consecutive** and **sorted in ascending order**.
- `-1` otherwise.

You need to find the power of all **subarrays** of `nums` of size `k`.

Return an integer array `results` of size `n - k + 1`, where `results[i]` is the power of `nums[i..(i + k - 1)]`.

---

## Examples

### Example 1
**Input**:  
`nums = [1, 2, 3, 4, 3, 2, 5]`  
`k = 3`  

**Output**:  
`[3, 4, -1, -1, -1]`

**Explanation**:  
The 5 subarrays of `nums` of size `k = 3` are:
1. `[1, 2, 3]` → Consecutive, max = 3.
2. `[2, 3, 4]` → Consecutive, max = 4.
3. `[3, 4, 3]` → Not consecutive.
4. `[4, 3, 2]` → Not sorted.
5. `[3, 2, 5]` → Not consecutive.

### Example 2
**Input**:  
`nums = [2, 2, 2, 2, 2]`  
`k = 4`

**Output**:  
`[-1, -1]`

**Explanation**:  
The subarrays of size `k = 4` are:
1. `[2, 2, 2, 2]` → Not consecutive.
2. `[2, 2, 2, 2]` → Not consecutive.

### Example 3
**Input**:  
`nums = [3, 2, 3, 2, 3, 2]`  
`k = 2`

**Output**:  
`[-1, 3, -1, 3, -1]`

**Explanation**:  
The subarrays of size `k = 2` are:
1. `[3, 2]` → Not consecutive.
2. `[2, 3]` → Consecutive, max = 3.
3. `[3, 2]` → Not consecutive.
4. `[2, 3]` → Consecutive, max = 3.
5. `[3, 2]` → Not consecutive.

---

## Constraints
- \( 1 \leq n = nums.length \leq 500 \)
- \( 1 \leq nums[i] \leq 10^5 \)
- \( 1 \leq k \leq n \)

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;



## Intuition

1. **Sliding Window Concept**:
   - Since we need to analyze every subarray of size `k`, we can use a **sliding window** approach to move across the array and evaluate the elements within the window.

2. **Consecutive and Sorted Check**:
   - A subarray is valid (power equals its maximum element) **only if**:
     - The elements are consecutive integers (e.g., `[2, 3, 4]`).
     - The elements are in strictly ascending order.
   - If these conditions fail, the power of the subarray is `-1`.

3. **Edge Cases**:
   - Subarrays containing duplicate elements (e.g., `[2, 2, 2]`) are invalid.
   - Any subarray where the difference between consecutive elements is not `1` is invalid.

---

## Approach

### Step 1: Sliding Window
- Iterate through the array `nums` with a sliding window of size `k`.
- Use the `.slice()` method to extract the current subarray of size `k` for evaluation.

### Step 2: Consecutiveness Check
- Create a helper function `isConsecutive` to verify if the elements in the subarray are:
  - Strictly consecutive (difference between elements is `1`).
  - Sorted in ascending order.
- If the subarray passes the check, calculate the power as the maximum element in the subarray.

### Step 3: Store Results
- If the subarray is valid, append its maximum element to the result array.
- Otherwise, append `-1` to the result.

### Step 4: Return Results
- After evaluating all subarrays, return the result array.

---

## Time Complexity
1. **Generating Subarrays**:
   - We use a sliding window to extract \( n - k + 1 \) subarrays, where \( n \) is the length of `nums`. Each subarray has \( k \) elements, so this step is \( O(n * k) \).

2. **Consecutiveness Check**:
   - For each subarray of size \( k \), the `isConsecutive` function performs \( O(k) \) checks.

3. **Overall**:
   - The combined complexity is \( O(n * k) \), where \( n \) is the length of `nums` and \( k \) is the size of the subarray.

### Space Complexity
1. **Temporary Storage**:
   - We use a temporary subarray of size \( k \) during each iteration: \( O(k) \).
2. **Output Array**:
   - The result array has a size of \( n - k + 1 \): \( O(n - k + 1) \).
3. **Total**:
   - The overall space complexity is \( O(n) \).
