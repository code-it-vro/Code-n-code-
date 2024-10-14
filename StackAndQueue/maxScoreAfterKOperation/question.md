# Maximal Score After Applying K Operations

### You are given a 0-indexed integer array `nums` and an integer `k`. You start with a score of 0. In one operation:
- Choose an index `i` such that `0 <= i < nums.length`,
- Increase your score by `nums[i]`,
- Replace `nums[i]` with `ceil(nums[i] / 3)`.

### You need to perform exactly `k` operations. Return the maximum possible score after applying these operations.

--- 

**Example 1**:
- Input: `nums = [10,10,10,10,10]`, `k = 5`
- Output: `50`
- Explanation: Apply the operation to each element exactly once, giving a score of `10 + 10 + 10 + 10 + 10 = 50`.

**Example 2**:
- Input: `nums = [1,10,3,3,3]`, `k = 3`
- Output: `17`
- Explanation:
  - Operation 1: Select `i = 1`, `nums` becomes `[1,4,3,3,3]`, score increases by `10`.
  - Operation 2: Select `i = 1`, `nums` becomes `[1,2,3,3,3]`, score increases by `4`.
  - Operation 3: Select `i = 2`, `nums` becomes `[1,1,1,3,3]`, score increases by `3`.
  - Final score is `10 + 4 + 3 = 17`.

---

**Constraints**:
- `1 <= nums.length, k <= 10^5`
- `1 <= nums[i] <= 10^9`

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Intuition & Approach

To maximize the score, we need to repeatedly choose the largest element from the array. A **Max Heap** (priority queue) is perfect for this scenario, as it allows us to efficiently retrieve the maximum element and replace it with its ceiling after division by 3.

---

### Approach:

1. **Initialize Max Heap**:  
   Insert all elements of the `nums` array into a max heap. This will allow us to efficiently retrieve the largest element in `O(log n)` time.

2. **K Operations**:
   - Perform `k` iterations:
     1. Remove the largest element from the heap.
     2. Add this largest element to the score.
     3. Replace the element with `ceil(element / 3)` and push it back into the heap.

3. **Return the final score** after `k` operations.

--- 

## Example Walkthrough:

For the input `nums = [1, 10, 3, 3, 3]` and `k = 3`:

1. Initialize max heap: `[10, 3, 3, 3, 1]`.
2. **First iteration**:
   - Extract `10` (maximum), score becomes `10`.
   - Push `ceil(10 / 3) = 4` back into the heap.
   - Heap after insertion: `[4, 3, 3, 3, 1]`.

3. **Second iteration**:
   - Extract `4` (maximum), score becomes `10 + 4 = 14`.
   - Push `ceil(4 / 3) = 2` back into the heap.
   - Heap after insertion: `[3, 3, 3, 1, 2]`.

4. **Third iteration**:
   - Extract `3` (maximum), score becomes `14 + 3 = 17`.
   - Push `ceil(3 / 3) = 1` back into the heap.
   - Heap after insertion: `[3, 3, 2, 1, 1]`.

Final score after 3 operations: **17**.

---

## Time Complexity:
- **Heap Initialization**: Inserting `n` elements into the heap takes `O(n log n)`.
- **K Operations**: For each of the `k` operations, extracting the maximum and inserting a new element both take `O(log n)` time.
- **Total Complexity**:  
  `O(n log n + k log n)`, where `n` is the size of `nums` and `k` is the number of iterations.

## Space Complexity:
- The space complexity is `O(n)` for the heap, where `n` is the number of elements in `nums`.