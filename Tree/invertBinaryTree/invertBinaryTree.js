/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case: If the current node is null, return null (end of a branch).
  if (root === null) return null;

  // Swap the left and right children of the current node.
  let temp = root.left; // Temporarily store the left child.
  root.left = root.right; // Assign the right child to the left.
  root.right = temp; // Assign the originally stored left child to the right.

  // Recursively invert the left and right subtrees.
  invertTree(root.left); // Invert the new left subtree.
  invertTree(root.right); // Invert the new right subtree.

  // Return the current node after its children have been inverted.
  return root;
};
