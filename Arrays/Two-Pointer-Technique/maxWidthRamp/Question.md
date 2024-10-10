# Maximum Width Ramp

### A ramp in an integer array `nums` is a pair `(i, j)` for which `i < j` and `nums[i] <= nums[j]`. The width of such a ramp is `j - i`.Given an integer array `nums`, return the maximum width of a ramp in `nums`. If there is no ramp in `nums`, return 0.

## Example 1:
**Input**: 
`nums = [6,0,8,2,1,5]`

**Output**: 
`4`

**Explanation**: 
The maximum width ramp is achieved at `(i, j) = (1, 5)` where `nums[1] = 0` and `nums[5] = 5`.

## Example 2:
**Input**: 
`nums = [9,8,1,0,1,9,4,0,4,1]`

**Output**: 
`7`

**Explanation**: 
The maximum width ramp is achieved at `(i, j) = (2, 9)` where `nums[2] = 1` and `nums[9] = 1`.

## Constraints:
- `2 <= nums.length <= 5 * 10^4`
- `0 <= nums[i] <= 5 * 10^4`



&nbsp;

&nbsp;

&nbsp;

&nbsp;





# Intuition:
To solve this problem, the key observation is that we want to maximize the difference `j - i` such that `nums[i] <= nums[j]`. To do this efficiently:

1. We need to find valid pairs `(i, j)` where `nums[i] <= nums[j]` and maximize the difference `j - i`.
2. Instead of checking all possible pairs (which would take `O(n^2)` time), we can optimize the solution using a **two-phase** approach:
   - First, precompute the maximum values from the end of the array to the start. This allows us to quickly check if there exists a valid `j` for any given `i`.
   - Then, use a **two-pointer** technique to find the largest width by iterating through possible `i` and `j` pairs efficiently.

---

# Example Walkthrough:

Let’s consider an example:

```plaintext
nums = [6, 0, 8, 2, 1, 5]

Step 1: Precompute the `arr` array to store maximum values:
nums = [6, 0, 8, 2, 1, 5]
arr  = [8, 8, 8, 5, 5, 5]   <-- arr[j] stores max(nums[j...n-1])

Step 2: Use two-pointer approach to find max width:
i=0, j=0: nums[0] = 6, arr[0] = 8 (valid ramp)
i=0, j=1: nums[0] = 6, arr[1] = 8 (valid ramp)
i=0, j=2: nums[0] = 6, arr[2] = 8 (valid ramp, ans = 2)
i=0, j=3: nums[0] = 6, arr[3] = 5 (invalid, i incremented)
i=1, j=3: nums[1] = 0, arr[3] = 5 (valid ramp, ans = 2)
i=1, j=4: nums[1] = 0, arr[4] = 5 (valid ramp, ans = 3)
i=1, j=5: nums[1] = 0, arr[5] = 5 (valid ramp, ans = 4)
Final answer = 4
```
---

# Approach:

1. **Precompute Maximum Array (`arr`)**:
   - Create an array `arr` where `arr[j]` stores the maximum value from `nums[j]` to `nums[n-1]`. This array helps to ensure that for each index `i`, we can quickly find a `j` such that `nums[i] <= arr[j]` (i.e., `nums[i] <= nums[j]`).

2. **Two-pointer Approach**:
   - Initialize two pointers, `i` and `j`, both starting at `0`.
   - For each `j`, try to find the smallest `i` where `nums[i] <= arr[j]` using a while loop to increment `i` when necessary.
   - Calculate the width `j - i` and keep track of the maximum width.

3. **Return the Result**:
   - After checking all possible valid ramps, return the maximum width ramp found.
   - 
## Time Complexity:
- **Precomputing the `arr` array**: Takes `O(n)` time since we traverse the array once.
- **Two-pointer traversal**: Also takes `O(n)` time because both `i` and `j` traverse the array only once.
- **Overall time complexity**: `O(n)`.

## Space Complexity:
- We use an additional array `arr` of size `n` to store the maximum values.
- **Overall space complexity**: `O(n)`.