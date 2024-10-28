# Longest Square Streak in an Array

#### You are given an integer array `nums`. A subsequence of `nums` is called a **square streak** if:

- The length of the subsequence is at least 2, and
- After sorting the subsequence, each element (except the first element) is the square of the previous number.

#### Return the length of the longest square streak in `nums`, or return `-1` if there is no square streak.

#### A **subsequence** is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

---

## Examples

**Example 1:**

Input: `nums = [4, 3, 6, 16, 8, 2]`  
Output: `3`  
Explanation: Choose the subsequence `[4, 16, 2]`. After sorting it, it becomes `[2, 4, 16]`.  
- `4 = 2 * 2`.
- `16 = 4 * 4`.

Therefore, `[4, 16, 2]` is a square streak.  
It can be shown that every subsequence of length 4 is not a square streak.

**Example 2:**

Input: `nums = [2, 3, 5, 6, 7]`  
Output: `-1`  
Explanation: There is no square streak in `nums`, so return `-1`.

---

## Constraints

- `2 <= nums.length <= 10^5`
- `2 <= nums[i] <= 10^5`

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;





# Intuition
The task is to find the longest "square streak" in the array. A square streak is a subsequence where each element (except the first) is the square of the previous element.

# Approach
1. **Sort the Array**: We start by sorting `nums` so that we can build square streaks in increasing order.
2. **Map for Tracking Streaks**: Use a map to store each number's longest square streak ending with that number:
   - The key is the number.
   - The value is the length of the streak ending with that number.
3. **Build the Streaks**:
   - For each number in `nums`:
     - Check if its square root is an integer and exists in the map.
     - If it does, we can extend the streak of the square root to this number by setting its streak value to `1 +` the streak length of its square root.
     - If it doesn’t, start a new streak with this number with a length of `1`.
4. **Track the Longest Streak**: Keep track of the longest streak found across all entries in the map.
5. **Result**: If the longest streak found is at least `2`, return it. Otherwise, return `-1`.

# Breakdown of Streak Building for `nums = [4, 3, 6, 16, 8, 2]`

1. **Sorting**: The sorted array is `[2, 3, 4, 6, 8, 16]`.

2. **Loop**:
   - **`num = 2`**:
     - `sqrt(2)` is not an integer, so `streakMap[2] = 1`.
     - **`maxStreak`** is now `1`.
     
   - **`num = 3`**:
     - `sqrt(3)` is not an integer, so `streakMap[3] = 1`.
     - **`maxStreak`** remains `1`.
     
   - **`num = 4`**:
     - `sqrt(4) = 2` and `2` is in the map.
     - Extend `2`'s streak: `streakMap[4] = streakMap[2] + 1 = 2`.
     - **`maxStreak`** updates to `2`.
     
   - **`num = 6`**:
     - `sqrt(6)` is not an integer, so `streakMap[6] = 1`.
     - **`maxStreak`** remains `2`.
     
   - **`num = 8`**:
     - `sqrt(8)` is not an integer, so `streakMap[8] = 1`.
     - **`maxStreak`** remains `2`.
     
   - **`num = 16`**:
     - `sqrt(16) = 4` and `4` is in the map.
     - Extend `4`'s streak: `streakMap[16] = streakMap[4] + 1 = 3`.
     - **`maxStreak`** updates to `3`.

### Final Result
After processing, `maxStreak` holds `3`, which is the length of the longest square streak `[2, 4, 16]`.

# Complexity Analysis
- **Time Complexity**: \(O(n \log n)\) due to sorting the array, and \(O(n)\) to iterate through `nums` and update the map.
- **Space Complexity**: \(O(n)\) for storing each unique number in the map.