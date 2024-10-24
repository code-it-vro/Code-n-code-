/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  // Base case: If both nodes are null, they are equivalent (end of branches).
  if (root1 === null && root2 === null) return true;

  // If one node is null and the other isn't, or if their values don't match, they aren't equivalent.
  if (root1 === null || root2 === null || root1.val !== root2.val) return false;

  // Check if the children are equivalent without any flip:
  // - root1's left matches root2's left.
  // - root1's right matches root2's right.
  const noFlip =
    flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);

  // Check if the children are equivalent with a flip:
  // - root1's left matches root2's right.
  // - root1's right matches root2's left.
  const flip =
    flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

  // If either `noFlip` or `flip` is true, then the trees are flip equivalent.
  return noFlip || flip;
};
