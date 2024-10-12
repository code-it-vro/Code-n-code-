# Divide Intervals Into Minimum Number of Groups

#### You are given a 2D integer array `intervals`, where `intervals[i] = [lefti, righti]` represents the inclusive interval `[lefti, righti]`. 
#### Your task is to divide the intervals into one or more groups such that:
- Each interval is in exactly one group.
- No two intervals in the same group intersect with each other.

#### Return the minimum number of groups you need to create.

**Definition of Intersection**:
Two intervals intersect if there is at least one common number between them. For example:
- The intervals `[1, 5]` and `[5, 8]` intersect because they both include the number `5`.

---

### Example 1:
**Input**: 
intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]
**Output**: 
3

**Explanation**:
We can divide the intervals into the following groups:
- Group 1: `[1, 5]`, `[6, 8]`
- Group 2: `[2, 3]`, `[5, 10]`
- Group 3: `[1, 10]`

It can be proven that it is not possible to divide the intervals into fewer than 3 groups.

### Example 2:
**Input**: 
```js
intervals = [[1,3],[5,6],[8,10],[11,13]]
```
**Output**: 
```js
1
```
**Explanation**:
None of the intervals overlap, so we can put all of them in one group.
 
--- 


### Constraints:
- `1 <= intervals.length <= 10^5`
- `intervals[i].length == 2`
- `1 <= lefti <= righti <= 10^6`


&nbsp;

&nbsp;

&nbsp;

&nbsp;

---

# Intuition and Approach:

#### The problem asks us to divide intervals into the minimum number of groups such that no two intervals in the same group overlap. Here's the intuition behind the approach:

1. **Sort the intervals**:
   - First, we extract the start times and end times from the intervals.
   - Sorting the start and end times helps us process intervals in order and decide whether a new group is needed or we can reuse an existing one.

2. **Two Pointers (start and end)**:
   - We use two pointers:
     - One pointer tracks the sorted start times of intervals (`startTimes`).
     - Another pointer tracks the sorted end times of intervals (`endTimes`).
   - As we process each interval, we check if the current interval’s start time is less than or equal to the earliest ending interval. If it is, we need a new group. If not, we can reuse the group by moving the end pointer to the next available interval.

3. **Incremental Group Allocation**:
   - If the current interval starts before or when an existing group ends, a new group is needed, and we increase the room count.
   - If the current interval starts after the previous one ends, we reuse an existing group (move the `end` pointer).

# Example Walkthrough:
Consider the input intervals `[[5, 10], [6, 8], [1, 5], [2, 3], [1, 10]]`:
- **Sorted Start Times**: `[1, 1, 2, 5, 6]`
- **Sorted End Times**: `[3, 5, 8, 10, 10]`

Now, we compare the intervals based on start and end times:
1. `start[0] = 1, end[0] = 3`: A new group is needed → rooms = 1.
2. `start[1] = 1, end[0] = 3`: A new group is needed → rooms = 2.
3. `start[2] = 2, end[0] = 3`: A new group is needed → rooms = 3.
4. `start[3] = 5, end[0] = 3`: Reuse a group → rooms = 3 (move `e` pointer).
5. `start[4] = 6, end[1] = 5`: Reuse a group → rooms = 3 (move `e` pointer).

The final result is that we need 3 groups.

# Time Complexity:
- Sorting the start times and end times both take \(O(n \log n)\), where \(n\) is the number of intervals.
- The loop that processes each interval takes \(O(n)\).
- Hence, the overall time complexity is **\(O(n \log n)\)** due to sorting.

# Space Complexity:
- We store the start times and end times in two arrays, which takes \(O(n)\) space.
- The space complexity is **\(O(n)\)** because of the extra storage required for the arrays.