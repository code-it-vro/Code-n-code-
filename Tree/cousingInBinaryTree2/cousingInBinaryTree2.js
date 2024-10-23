/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.left = (left === undefined ? null : left)
 *     this.right = (right === undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  // Base case: if the root is null, return null
  if (root === null) return null;

  // `levelSums` will store the sum of values for each level
  let levelSums = [];

  // Queue for level-order traversal (BFS)
  let queue = [root];

  // --- FIRST PASS: Calculate the sum of values for each level ---

  while (queue.length > 0) {
    // Get the number of nodes at the current level
    let levelSize = queue.length;
    let sum = 0;

    // Traverse all nodes at the current level
    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Dequeue the node from the front of the queue
      sum += node.val; // Add the node's value to the level sum

      // If the node has a left child, enqueue it
      if (node.left) queue.push(node.left);
      // If the node has a right child, enqueue it
      if (node.right) queue.push(node.right);
    }

    // Store the sum of the current level in `levelSums`
    levelSums.push(sum);
  }

  // After the first pass, `levelSums` holds the sum of all levels.
  // For example, for the tree [5,4,9,1,10,null,7]:
  // levelSums = [5, 13, 18]
  // - Level 1 sum = 5 (just the root)
  // - Level 2 sum = 4 + 9 = 13
  // - Level 3 sum = 1 + 10 + 7 = 18

  // Reset the queue for another level-order traversal
  queue = [root];
  root.val = 0; // Root has no cousins, so its value is set to 0
  let levelIndex = 1; // Start from the second level (index 1)

  // --- SECOND PASS: Replace values based on cousin sums ---

  while (queue.length > 0) {
    let levelSize = queue.length; // Get the number of nodes at the current level

    for (let i = 0; i < levelSize; i++) {
      let node = queue.shift(); // Dequeue the node

      // Calculate the sum of the current node's siblings (children of the same parent)
      let siblingSum = 0;
      if (node.left && node.right) {
        siblingSum = node.left.val + node.right.val;
      } else if (node.left) {
        siblingSum = node.left.val;
      } else if (node.right) {
        siblingSum = node.right.val;
      }

      // Update the children nodes' values to the sum of cousin values
      // Cousin sum = sum of all nodes at the current level - sibling sum
      if (node.left) {
        node.left.val = levelSums[levelIndex] - siblingSum;
        queue.push(node.left); // Enqueue the left child
      }
      if (node.right) {
        node.right.val = levelSums[levelIndex] - siblingSum;
        queue.push(node.right); // Enqueue the right child
      }
    }
    // Move to the next level
    levelIndex++;
  }

  // Return the modified tree
  return root;
};

/**
 * Example Walkthrough:
 *
 * Input: root = [5,4,9,1,10,null,7]
 *
 * Initial Tree:
 *         5
 *       /   \
 *      4     9
 *     / \     \
 *    1   10    7
 *
 * First Pass: Calculate level sums.
 * - Level 1 sum = 5
 * - Level 2 sum = 4 + 9 = 13
 * - Level 3 sum = 1 + 10 + 7 = 18
 * levelSums = [5, 13, 18]
 *
 * Second Pass: Replace node values based on cousin sums.
 *
 * - Root (5): no cousins, value = 0.
 *
 * Level 2:
 * - Node 4: no cousins, value = 0.
 * - Node 9: no cousins, value = 0.
 *
 * Level 3:
 * - Node 1: cousin is 7, new value = 7.
 * - Node 10: cousin is 7, new value = 7.
 * - Node 7: cousins are 1 and 10, new value = 1 + 10 = 11.
 *
 * Final Tree:
 *         0
 *       /   \
 *      0     0
 *     / \     \
 *    7   7    11
 *
 * Output: [0,0,0,7,7,null,11]
 */
