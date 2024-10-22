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
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  // `result` array will store the sum of each level of the binary tree
  let result = [];

  // `queue` is used to implement a level-order traversal (BFS) of the tree
  // Initially, the root node is added to the queue
  let queue = [root];

  // Level-order traversal (Breadth-First Search) to calculate the sum of each level
  while (queue.length > 0) {
    // `n` is the number of nodes at the current level
    let n = queue.length;

    // `sum` will hold the total sum of values for the current level
    let sum = 0;

    // Process each node at the current level
    for (let i = 0; i < n; i++) {
      // Dequeue a node from the front of the queue
      let node = queue.shift();

      // Add the value of the node to the current level's sum
      sum += node.val;

      // If the node has a left child, enqueue it for processing in the next level
      if (node.left) queue.push(node.left);

      // If the node has a right child, enqueue it for processing in the next level
      if (node.right) queue.push(node.right);
    }

    // After processing all nodes at this level, add the sum of the level to `result`
    result.push(sum);
  }

  // If `k` is greater than the number of levels in the tree, return -1 as there are not enough levels
  if (k > result.length) return -1;

  // Sort the level sums in descending order (largest to smallest)
  result.sort((a, b) => b - a);

  // Return the k-th largest level sum (k is 1-based, so use `k-1` for 0-based indexing)
  return result[k - 1];
};
