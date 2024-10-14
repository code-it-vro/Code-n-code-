/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxKelements = function (nums, k) {
  // Initialize a max heap using MaxPriorityQueue.
  // We define the priority as the value itself (since it's a max heap).
  let maxHeap = new MaxPriorityQueue({ priority: (x) => x });

  // Enqueue all elements from the `nums` array into the max heap
  // The heap will store elements in descending order based on their value.
  for (let num of nums) {
    maxHeap.enqueue(num);
  }

  let ans = 0; // This will store the sum of the top k elements we select.

  // Now we perform the process `k` times
  while (k--) {
    // Step 1: Remove the maximum element from the heap.
    const element = maxHeap.dequeue().element;

    // Step 2: Add this maximum element to the answer.
    ans += element;

    // Step 3: Insert back the modified value into the heap (Math.ceil(element / 3))
    // This ensures that after we pick the largest element, it is replaced by the ceiling of its third.
    maxHeap.enqueue(Math.ceil(element / 3));
  }

  return ans; // Return the final answer after `k` iterations.
};
