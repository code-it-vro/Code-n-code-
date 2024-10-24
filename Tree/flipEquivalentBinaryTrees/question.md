# Flip Equivalent Binary Trees

#### For a binary tree T, we can define a flip operation as follows: choose any node, and swap the left and right child subtrees.
#### A binary tree X is flip equivalent to a binary tree Y if and only if we can make X equal to Y after some number of flip operations.
#### Given the roots of two binary trees `root1` and `root2`, return `true` if the two trees are flip equivalent or `false` otherwise.

---

## Example 1:
**Input**: 
root1 = [1,2,3,4,5,6,null,null,null,7,8]
root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
**Output**:
true

## Example 2:
**Input**: 
root1 = []
root2 = []
**Output**:
false

## Example 3:
**Input**: 
root1 = []
root2 = [1]
**Output**:
false

## Constraints:
- The number of nodes in each tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;



# **Approach**
The `flipEquiv` function determines if two binary trees are flip equivalent. This means that we can make one tree equal to another by swapping the left and right children of any node.

---

# **Intuition**
The idea is to compare the two trees node by node. At each step, we check:
- If both nodes are `null`, they are equivalent.
- If only one of the nodes is `null`, the trees are not equivalent.
- If the values of the current nodes are different, they are not equivalent.
- If the values are the same, we need to check both:
  - The left child of the first tree against the left child of the second tree, and the right child of the first tree against the right child of the second tree (no flip).
  - The left child of the first tree against the right child of the second tree, and the right child of the first tree against the left child of the second tree (with a flip).

---

# **Step-by-Step Explanation**
1. **Base Case**:
   - If both nodes are `null`, return `true` (they are equivalent).
   - If only one node is `null`, return `false`.
2. **Value Comparison**: If the values of the two nodes are not equal, return `false`.
3. **Recursive Calls**:
   - Perform two recursive checks:
     - Check if the trees are equivalent without flipping.
     - Check if the trees are equivalent with flipping.
4. **Return the Result**: Return `true` if either of the two checks returns `true`.

---

# Complexity
- **Time complexity:**
Each node is visited once, where n is the total number of nodes in both trees.

- **Space complexity:**
The space complexity is O(h), where h is the height of the tree, accounting for the recursive call stack depth. In the worst case, for a skewed tree, the height could be n.

