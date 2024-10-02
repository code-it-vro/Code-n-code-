
# Rank Transform of an Array

Given an array of integers `arr`, replace each element with its rank. The rank represents how large the element is, with the following rules:

1. **Rank is an integer starting from 1.**
2. **The larger the element, the larger the rank.** If two elements are equal, their rank must be the same.
3. **Rank should be as small as possible.**


### Example 1:

- **Input**: `arr = [40, 10, 20, 30]`
- **Output**: `[4, 1, 2, 3]`
- **Explanation**: 
    - 40 is the largest element (rank 4)
    - 10 is the smallest (rank 1)
    - 20 is the second smallest (rank 2)
    - 30 is the third smallest (rank 3)

### Example 2:

- **Input**: `arr = [100, 100, 100]`
- **Output**: `[1, 1, 1]`
- **Explanation**: All elements are the same, so they all share the same rank (rank 1).

### Example 3:

- **Input**: `arr = [37, 12, 28, 9, 100, 56, 80, 5, 12]`
- **Output**: `[5, 3, 4, 2, 8, 6, 7, 1, 3]`
- **Explanation**:
    - The ranks are calculated by sorting the array and then assigning ranks starting from 1.

### Constraints:

- `0 <= arr.length <= 10^5`
- `-10^9 <= arr[i] <= 10^9`

&nbsp

&nbsp

&nbsp

&nbsp

&nbsp


## Problem Intuition:

The task is to rank the elements of an array based on their values. The smallest element should get rank 1, the second smallest should get rank 2, and so on. If there are duplicate values, they should all have the same rank. Essentially, this problem boils down to sorting the array and then assigning ranks to the elements in the original array according to their sorted order.

## Approach:

1. **Sort the Array**: First, make a copy of the original array and sort it. Sorting helps in easily assigning ranks from the smallest to the largest element.
2. **Use a Map for Ranks**: Create a `Map` to keep track of the ranks of the unique elements in the sorted array, we can also use object instead of using map its a personal choice won't make much difference if used either. This will help us quickly look up the rank of each element.
3. **Assign Ranks**: Traverse the sorted array, and for each unique number, assign it a rank (starting from 1). If a number already has a rank (i.e., it's a duplicate), skip it.
4. **Map the Ranks Back to the Original Array**: Finally, traverse the original array and replace each element with its corresponding rank using the `Map`.

## Explanation:

1. **Sorted Array**: By sorting the array, we can rank each number based on its position in the sorted list. 
   - If the sorted array is `[5, 45, 63, 67, 87]`, the rank order would be: `5 -> 1, 45 -> 2, 63 -> 3, 67 -> 4, 87 -> 5`.
   
2. **Rank Assignment Using a Map**: As we traverse the sorted array, we use a `Map` to store each unique number as a key and its rank as the value. If a number repeats (e.g., `100, 100, 100`), we only assign it a rank once.

3. **Map the Ranks Back to the Original Array**: After building the `Map`, we then go back to the original array and for each number, we fetch its rank from the `Map`. This transforms the original array into its ranked form.

## Time and Space Complexity:

### Time Complexity:
1. **Sorting**: Sorting the array takes `O(n log n)` time, where `n` is the length of the array.
2. **Building the Rank Map**: Creating the rank map requires traversing the sorted array, which takes `O(n)` time.
3. **Mapping the Ranks Back**: Traversing the original array and replacing the numbers with their ranks also takes `O(n)`.

Thus, the overall time complexity is:
- **O(n log n)** due to the sorting step.

### Space Complexity:
1. **Additional Space**: We use a copy of the array for sorting, which takes `O(n)` extra space.
2. **Map for Ranks**: The `Map` stores unique numbers and their ranks. In the worst case (all elements are unique), this requires `O(n)` space.

Thus, the overall space complexity is:
- **O(n)**.
