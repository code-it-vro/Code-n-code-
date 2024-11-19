# **Maximum Sum of Distinct Subarray of Length K**


You are given an integer array `nums` and an integer `k`. Find the **maximum subarray sum** of all the subarrays of `nums` that meet the following conditions:

1. The length of the subarray is `k`.
2. All the elements of the subarray are **distinct**.

Return the maximum subarray sum of all the subarrays that meet the conditions. If no subarray meets the conditions, return `0`.

A subarray is a contiguous non-empty sequence of elements within an array.

---

### **Examples**

#### Example 1:
**Input**:  
`nums = [1,5,4,2,9,9,9]`, `k = 3`  
**Output**:  
`15`  

**Explanation**:  
The subarrays of `nums` with length `3` are:  
- `[1,5,4]` which meets the requirements and has a sum of `10`.
- `[5,4,2]` which meets the requirements and has a sum of `11`.
- `[4,2,9]` which meets the requirements and has a sum of `15`.
- `[2,9,9]` which does not meet the requirements because the element `9` is repeated.
- `[9,9,9]` which does not meet the requirements because the element `9` is repeated.

We return `15` because it is the maximum subarray sum of all the subarrays that meet the conditions.

---

#### Example 2:
**Input**:  
`nums = [4,4,4]`, `k = 3`  
**Output**:  
`0`  

**Explanation**:  
The subarrays of `nums` with length `3` are:  
- `[4,4,4]` which does not meet the requirements because the element `4` is repeated.  

We return `0` because no subarrays meet the conditions.

---

### **Constraints**:
- \( 1 \leq k \leq nums.length \leq 10^5 \)
- \( 1 \leq nums[i] \leq 10^5 \)

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;







## **Intuition**
The problem involves finding the maximum subarray sum of size `k` where all elements in the subarray are distinct. A straightforward approach would involve iterating through all subarrays of size `k`, but this is computationally expensive. Instead, we use the **sliding window technique** to efficiently manage subarray boundaries while maintaining the distinctness condition using a `Set`.

---

## **Approach**

1. **Sliding Window Technique**:
   - Utilize two pointers: `i` (right pointer) to expand the window and `j` (left pointer) to shrink the window when needed.
   - A `Set` is used to ensure that all elements in the current window are distinct.
   - Maintain a variable `currSum` to keep track of the sum of elements in the current window.

2. **Steps**:
   - Iterate through the array using the right pointer `i`.
   - If the current element `nums[i]` already exists in the `Set`, repeatedly remove elements from the left of the window (`nums[j]`) until the duplicate is removed.
   - Add the current element to the `Set` and include its value in `currSum`.
   - Once the window size equals `k`, check if the current sum is greater than the `result` (maximum sum so far). If it is, update `result`.
   - To slide the window forward, remove the leftmost element (`nums[j]`) from `currSum` and the `Set`, and increment the left pointer (`j`).

3. **Return Value**:
   - Return the maximum sum (`result`) found for subarrays of size `k` with distinct elements. If no such subarray exists, return `0`.

---

## **Complexity Analysis**

1. **Time Complexity**:  
   \(O(n)\), where \(n\) is the length of the array:
   - Each element is added to and removed from the `Set` at most once.
   - All operations on the `Set` (e.g., `add`, `delete`, `has`) are \(O(1)\) on average.

2. **Space Complexity**:  
   \(O(k)\), where \(k\) is the size of the subarray:
   - The `Set` can store at most \(k\) distinct elements at any given time.

---

### **Key Takeaways**
- The sliding window approach avoids the need to compute sums for all subarrays explicitly, making the solution efficient.
- The use of a `Set` ensures that the distinctness condition is upheld within the sliding window.
- This approach is particularly suited for large arrays with constraints on subarray size and properties.
