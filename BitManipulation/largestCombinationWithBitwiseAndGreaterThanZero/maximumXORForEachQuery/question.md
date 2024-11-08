# Maximum XOR for each Query 

You are given a sorted array `nums` of `n` non-negative integers and an integer `maximumBit`. You need to perform the following query `n` times:

1. Find a non-negative integer `k` such that `k < 2^maximumBit` and the result of `nums[0] XOR nums[1] XOR ... XOR nums[nums.length - 1] XOR k` is maximized.
2. Remove the last element from the current array `nums`.
3. Append `k` to an answer array where `answer[i]` will be the answer to the `i`-th query.

Return the array `answer` where each element `answer[i]` is the result of the `i`-th query.

---

## Example 1
Input: nums = [0,1,1,3], maximumBit = 2  
Output: [0,3,2,3]  
Explanation: The queries are answered as follows:  
1st query: nums = [0,1,1,3], k = 0 since 0 XOR 1 XOR 1 XOR 3 XOR 0 = 3.  
2nd query: nums = [0,1,1], k = 3 since 0 XOR 1 XOR 1 XOR 3 = 3.  
3rd query: nums = [0,1], k = 2 since 0 XOR 1 XOR 2 = 3.  
4th query: nums = [0], k = 3 since 0 XOR 3 = 3.  

## Example 2
Input: nums = [2,3,4,7], maximumBit = 3  
Output: [5,2,6,5]  
Explanation: The queries are answered as follows:  
1st query: nums = [2,3,4,7], k = 5 since 2 XOR 3 XOR 4 XOR 7 XOR 5 = 7.  
2nd query: nums = [2,3,4], k = 2 since 2 XOR 3 XOR 4 XOR 2 = 7.  
3rd query: nums = [2,3], k = 6 since 2 XOR 3 XOR 6 = 7.  
4th query: nums = [2], k = 5 since 2 XOR 5 = 7.  

## Example 3
Input: nums = [0,1,2,2,5,7], maximumBit = 3  
Output: [4,3,6,4,6,7]  
Explanation: The queries are answered as follows:  
1st query: nums = [0,1,2,2,5,7], k = 4 since 0 XOR 1 XOR 2 XOR 2 XOR 5 XOR 7 XOR 4 = 7.  
2nd query: nums = [0,1,2,2,5], k = 3 since 0 XOR 1 XOR 2 XOR 2 XOR 5 XOR 3 = 7.  
3rd query: nums = [0,1,2,2], k = 6 since 0 XOR 1 XOR 2 XOR 2 XOR 6 = 7.  
4th query: nums = [0,1,2], k = 4 since 0 XOR 1 XOR 2 XOR 4 = 7.  
5th query: nums = [0,1], k = 6 since 0 XOR 1 XOR 6 = 7.  
6th query: nums = [0], k = 7 since 0 XOR 7 = 7.  

---

### Constraints
- `nums.length == n`
- `1 <= n <= 10^5`
- `1 <= maximumBit <= 20`
- `0 <= nums[i] < 2^maximumBit`
- `nums` is sorted in ascending order.


&nbsp;

&nbsp;

&nbsp;

&nbsp;


## Problem Intuition
The task is to find the maximum possible XOR value `k` for each query on a sorted array `nums` of non-negative integers, given a `maximumBit` constraint:
1. The value of `k` needs to be less than `2^maximumBit` (which sets an upper limit for `k`).
2. Each query involves finding an integer `k` such that the XOR of all elements in the remaining array with `k` is maximized.
3. After each query, the last element is removed from `nums`, and this process repeats.

This structure suggests a backward iteration from the end of the array toward the beginning, which allows us to handle each query while updating the array's XOR progressively.

---

## Approach
1. **Calculate the Upper Bound for `k`**:
   - We calculate the maximum possible value for `k`, `maxK`, as `(1 << maximumBit) - 1`. This represents the largest integer we can use for `k` within the bit limit, having all `maximumBit` bits set to `1`.
   
2. **Initial XOR Calculation**:
   - We compute the XOR of all elements in `nums` to get an initial `xor_sum`. This gives us the cumulative XOR of `nums` before any elements are removed.

3. **Iterate Backward to Answer Queries**:
   - For each query, starting from the end of `nums`:
     - Calculate `k` as `k = maxK ^ xor_sum`. This XOR operation maximizes the result with respect to the current `xor_sum`.
     - Append this value of `k` to the result array.
     - Update `xor_sum` by removing the last element in `nums` using `xor_sum ^= nums[i]`, preparing it for the next query.

4. **Return Results**:
   - The result array contains the maximum values of `k` for each query, in the order required.

### Key Observations
- XORing with `maxK` flips all bits of `xor_sum` up to `maximumBit`, which yields the highest possible XOR value under the constraints.
- Updating `xor_sum` with the current element allows us to simulate removing the element for each successive query.

---

## Step-by-Step Explanation for Each Query

### 1st Query
- **Current xor_sum**: 3
- **Find k**: We want `k = maxK XOR xor_sum`, where `maxK = (1 << maximumBit) - 1 = 3`.
  - **Calculation**: `k = 3 XOR 3 = 0`
  - This `k` value maximizes the XOR result with the current `xor_sum` of 3.
- **Store k**: Append `k = 0` to the result array.
- **Update xor_sum**: Remove the last element (3) from `nums` by XORing `xor_sum` with 3:
  - **New xor_sum** = `3 XOR 3 = 0`.

### 2nd Query
- **Current xor_sum**: Now `xor_sum = 0` (after removing the last element from the previous query).
- **Find k**: Calculate `k = 3 XOR 0 = 3`.
- **Store k**: Append `k = 3` to the result array.
- **Update xor_sum**: Remove the next last element (1) from `nums`:
  - **New xor_sum** = `0 XOR 1 = 1`.

### 3rd Query
- **Current xor_sum**: Now `xor_sum = 1`.
- **Find k**: Calculate `k = 3 XOR 1 = 2`.
- **Store k**: Append `k = 2` to the result array.
- **Update xor_sum**: Remove the next last element (1) from `nums`:
  - **New xor_sum** = `1 XOR 1 = 0`.

### 4th Query
- **Current xor_sum**: Now `xor_sum = 0`.
- **Find k**: Calculate `k = 3 XOR 0 = 3`.
- **Store k**: Append `k = 3` to the result array.
- **Update xor_sum**: Remove the last remaining element (0) from `nums`:
  - **New xor_sum** = `0 XOR 0 = 0`.

---


## Complexity Analysis
- **Time Complexity**: `O(n)`
  - Calculating the initial `xor_sum` requires `O(n)` as we XOR all elements in `nums`.
  - The loop to handle each query runs in `O(n)` since each iteration updates `xor_sum` in constant time.
- **Space Complexity**: `O(n)`
  - The space complexity is `O(n)` for storing the `answer` array, which holds the result for each query.

This approach is efficient as it avoids modifying the `nums` array directly, working only with `xor_sum` and thus achieving the desired result with minimal operations.
