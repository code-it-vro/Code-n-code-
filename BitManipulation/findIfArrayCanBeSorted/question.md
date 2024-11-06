# Find if an Array Can Be Sorted 

You are given a 0-indexed array of positive integers `nums`. In one operation, you can swap any two adjacent elements if they have the same number of set bits (1's in binary). You can perform this operation any number of times. Return `true` if you can sort the array, else return `false`.

---

## Examples

**Example 1:**
- **Input:** `nums = [8, 4, 2, 30, 15]`
- **Output:** `true`
- **Explanation:** 
  - Binary representations:
    - `2`: `10` (1 set bit)
    - `4`: `100` (1 set bit)
    - `8`: `1000` (1 set bit)
    - `15`: `1111` (4 set bits)
    - `30`: `11110` (4 set bits)
  - Steps to sort:
    1. Swap `8` and `4` (same set bit count) → `[4, 8, 2, 30, 15]`
    2. Swap `8` and `2` (same set bit count) → `[4, 2, 8, 30, 15]`
    3. Swap `4` and `2` (same set bit count) → `[2, 4, 8, 30, 15]`
    4. Swap `30` and `15` (same set bit count) → `[2, 4, 8, 15, 30]`
  - Final sorted array: `[2, 4, 8, 15, 30]` - Hence, the result is `true`.

**Example 2:**
- **Input:** `nums = [1, 2, 3, 4, 5]`
- **Output:** `true`
- **Explanation:** The array is already sorted, so we return `true`.

**Example 3:**
- **Input:** `nums = [3, 16, 8, 4, 2]`
- **Output:** `false`
- **Explanation:** Sorting is impossible due to incompatible set bit counts between certain elements.

---

#### Constraints
- `1 <= nums.length <= 100`
- `1 <= nums[i] <= 28`

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Intuition
- The problem involves sorting an array, but with a constraint: we can only swap adjacent elements if they have the same number of set bits (1’s in binary).
- We use a modified bubble sort that checks each pair of adjacent elements, swapping them only if they have the same set bit count and are out of order.
- A helper function, `countOnes`, counts the set bits of each number by converting it to binary. This function lets us determine if two adjacent numbers can be swapped.
- We use a `swapped` flag to track if any swaps were made during a pass. If no swaps occur in a complete pass, the array is already sorted, so we can terminate early, optimizing the process.
- If at any point we need a swap but the numbers do not have the same set bit count, it’s impossible to sort the array under the given rules, so we return `false`.

---

## Approach

1. **Binary Representation and Swap Condition**: Use the count of 1's (set bits) in the binary representation of each element to determine if two adjacent elements can be swapped.
2. **Modified Bubble Sort**: Perform a bubble sort, but swap only if the adjacent numbers have the same set bit count.
3. **Early Termination**: Use a `swapped` flag. If no swaps are made in a complete pass, the array is already sorted, allowing early termination.
4. **Failure Condition**: If a swap is needed for sorting but set bit counts differ, return `false`.

---

## Complexity Analysis
- **Time Complexity**: `O(n^2)` - This comes from the bubble sort approach, where for each element we may need to compare it with adjacent elements up to `n` times.
- **Space Complexity**: `O(1)` - The solution uses a constant amount of extra space, as the sorting is done in place with minimal auxiliary variables.





