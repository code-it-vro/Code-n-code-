# Invert A Binary Tree

#### Given the root of a binary tree, invert the tree, and return its root.

---

## Example 1:
**Input:** `root = [4,2,7,1,3,6,9]`
**Output:** `[4,7,2,9,6,3,1]`

## Example 2:
**Input:** `root = [2,1,3]`
**Output:** `[2,3,1]`

## Example 3:
**Input:** `root = []`
**Output:** `[]`

---

## Constraints:
- The number of nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`     

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;



# **Approach**
The `invertTree` function inverts a binary tree by swapping the left and right children of each node. This is done recursively to ensure every node in the tree is inverted.

---

# **Intuition**
The idea is to perform a **depth-first traversal** of the binary tree. At each node, we swap its left and right children, and then recursively repeat the process for each subtree.

---
# **Step-by-Step Explanation**

1. **Base Case**: If the current node is `null`, return `null`. This signifies that we've reached the end of a branch.
2. **Swap Children**: Swap the left and right child nodes using a temporary variable.
   - `let temp = root.left`
   - `root.left = root.right`
   - `root.right = temp`
3. **Recursive Call**:
   - Call the `invertTree` function on the left child.
   - Call the `invertTree` function on the right child.
4. **Return the Root**: After inverting the children of the current node, return the root.
5. 
---

# Complexity

- **Time complexity:**
Each node is visited once, where n is the total number of nodes in both trees.

- **Space complexity:**
The space complexity is O(h), where h is the height of the tree, accounting for the recursive call stack depth. In the worst case, for a skewed tree, the height could be n.
