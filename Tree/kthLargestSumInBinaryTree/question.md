# kth Largest Level Sum in a Binary Tree

The level sum in the tree is the sum of the values of the nodes that are on the same level.

Return the **kth largest** level sum in the tree (not necessarily distinct). If there are fewer than **k** levels in the tree, return **-1**.

Note that two nodes are on the same level if they have the same distance from the root.

---

## Example 1:
**Input:**  
`root = [5,8,9,2,1,3,7,4,6], k = 2`  
**Output:**  
`13`  
**Explanation:**  
The level sums are the following:
- Level 1: `5`
- Level 2: `8 + 9 = 17`
- Level 3: `2 + 1 + 3 + 7 = 13`
- Level 4: `4 + 6 = 10`  
The **2nd largest** level sum is `13`.

---

## Example 2:
**Input:**  
`root = [1,2,null,3], k = 1`  
**Output:**  
`3`  
**Explanation:**  
The largest level sum is `3`.

---

# Constraints:
- The number of nodes in the tree is **n**.
- **2 <= n <= 10^5**
- **1 <= Node.val <= 10^6**
- **1 <= k <= n**


# Time Complexity
1. **Level Order Traversal**: 
   - To compute the level sums, a level order traversal (or breadth-first traversal) of the binary tree is performed. This traversal visits each node once, leading to a time complexity of **O(n)**, where **n** is the number of nodes in the tree.
   
2. **Sorting**: 
   - After computing the sums for each level, finding the **kth largest** sum requires sorting the level sums. In the worst case, there are **h** levels in the tree, where **h** is the height of the tree. The time complexity for sorting these sums is **O(h log h)**. 
   - In a balanced binary tree, **h** is **O(log n)**, but in the worst case (for a skewed tree), **h** can be **O(n)**.

**Overall Time Complexity**: 
- Approximated as **O(n + h log h)**, which simplifies to **O(n log n)** in the worst case for very unbalanced trees.

# Space Complexity
1. **Level Sums Storage**: 
   - Storing the sums of each level requires space proportional to the number of levels in the tree, **O(h)**.
   
2. **Queue for Level Order Traversal**: 
   - If a queue is used for the level order traversal, in the worst case, it can hold up to **O(n)** nodes (if the tree is completely unbalanced).

**Overall Space Complexity**: 
- Considered as **O(h)** for the level sums and **O(n)** for the queue, leading to an overall space complexity of **O(n)** in the worst case.

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;



# Intuition
The problem asks to find the **k-th largest level sum** in a binary tree. 
- To solve this, we need to calculate the **sum of nodes at each level**.
- Since we need the k-th **largest** sum, we must store the sums of each level, then **sort** the sums in descending order to access the required k-th sum.

Key Points:
1. **Breadth-First Search (BFS)** is well-suited for **level-order traversal**, allowing us to process nodes level by level.
2. After calculating the sum for each level, **sorting** the sums in descending order lets us easily find the k-th largest sum.
3. If `k` is greater than the number of levels, we return `-1`, as there aren't enough levels to provide a valid k-th largest sum.

---

# Approach

1. **Initialize an empty result array (`result`)** that will store the sum of nodes at each level.
2. **Use a queue for BFS traversal**: Start with the root node in the queue.
3. While there are nodes in the queue:
   - Process each level: For each node at the current level, add its value to the level sum.
   - **Add the sum of the current level** to the `result` array.
   - Enqueue the left and right children of the current node for the next level.
4. After traversing all levels:
   - **Sort the `result` array** in descending order.
   - Return the `k-th` largest sum (which is the `(k-1)-th` index in 0-based indexing).
   - If `k` is greater than the number of levels, return `-1`.
   
--- 
