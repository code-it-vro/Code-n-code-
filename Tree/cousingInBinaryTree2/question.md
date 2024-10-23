### Cousing In Binary Tree II

#### Given the root of a binary tree, replace the value of each node in the tree with the sum of all its cousins' values.
#### Two nodes of a binary tree are cousins if they have the same depth with different parents.
#### Return the root of the modified tree.
#### Note that the depth of a node is the number of edges in the path from the root node to it.


---

## Example 1:

**Input:** `root = [5,4,9,1,10,null,7]`  
**Output:** `[0,0,0,7,7,null,11]`  
**Explanation:** The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 5 does not have any cousins so its sum is 0.
- Node with value 4 does not have any cousins so its sum is 0.
- Node with value 9 does not have any cousins so its sum is 0.
- Node with value 1 has a cousin with value 7 so its sum is 7.
- Node with value 10 has a cousin with value 7 so its sum is 7.
- Node with value 7 has cousins with values 1 and 10 so its sum is 11.

## Example 2:

**Input:** `root = [3,1,2]`  
**Output:** `[0,0,0]`  
**Explanation:** The diagram above shows the initial binary tree and the binary tree after changing the value of each node.
- Node with value 3 does not have any cousins so its sum is 0.
- Node with value 1 does not have any cousins so its sum is 0.
- Node with value 2 does not have any cousins so its sum is 0.

---

## Constraints:
- The number of nodes in the tree is in the range [1, 10^5].
- 1 <= Node.val <= 10^4

&nbsp;

&nbsp;

&nbsp;

&nbsp;




# **Intuition**
The goal is to replace the value of each node in a binary tree with the sum of all its **cousins' values**. Two nodes are considered cousins if they are at the same depth but have different parents.

Key Points:
1. We need to calculate the **sum of values at each level** in the tree to determine the cousin sums.
2. To get the cousin sum for a node, subtract the sum of its **siblings** from the total level sum.
3. This requires two passes over the tree:
   - First pass to calculate the **sum of node values at each level**.
   - Second pass to **update each node's value** based on its cousin sum.

---

# **Approach**
1. **Level Order Traversal (BFS)**:
   - Use a queue to perform a **Breadth-First Search (BFS)** to traverse the tree level by level.
   - In the first pass, calculate the **sum of each level** and store it in an array called `levelSums`.
   - Each index in `levelSums` corresponds to the sum of nodes at that level.

2. **Update Node Values**:
   - Reset the queue for a second level-order traversal.
   - In the second pass, replace the value of each node using the sum of its cousins:
     - Calculate the sum of its siblings.
     - Subtract the sibling sum from the level sum to get the cousin sum.
     - Update the node’s children's values based on the cousin sum.

3. **Edge Cases**:
   - If the tree is empty, return `null`.
   - The root node will always have a value of `0` since it has no cousins.

---


# **Time Complexity**
1. **Level Order Traversal (BFS)**:
   - We visit each node exactly once to calculate the sum of each level, which takes **O(n)**, where `n` is the number of nodes.
   
2. **Updating Node Values**:
   - Another level-order traversal is performed to update node values, which also takes **O(n)**.

Therefore, the overall time complexity is:  [O(n)\]

# **Space Complexity**
1. **Queue for BFS**:
   - The maximum space used by the queue is the width of the tree, which in the worst case can be **O(w)**, where `w` is the maximum width of the tree.
   
2. **Level Sums Storage**:
   - We store the sum of each level in an array, so the space used is **O(L)**, where `L` is the number of levels.

Therefore, the overall space complexity is:[O(w + L)]
- In a balanced binary tree, `w` is **O(n/2)** and `L` is **O(log n)**.
- In the worst case (skewed tree), `w` can be **O(n)** and `L` is **O(n)**.

---