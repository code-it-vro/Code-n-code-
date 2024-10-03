/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  // Step 1: Create a copy of the original array and sort it in ascending order
  // This will help us assign ranks based on the sorted order of elements
  let sortedArr = [...arr].sort((a, b) => a - b);

  // Step 2: Initialize a Map to store each unique element's rank
  let rankMap = new Map(); // 'num' as key, 'rank' as value
  let rank = 1; // Start ranking from 1

  // Step 3: Traverse the sorted array and assign ranks to unique elements
  for (let num of sortedArr) {
    // If the number has not been assigned a rank yet, assign the current rank
    if (!rankMap.has(num)) {
      rankMap.set(num, rank++); // Add number with its rank and increment rank for next number
    }
  }

  // Step 4: Traverse the original array and replace each element with its corresponding rank
  // The rank is fetched from the rankMap
  return arr.map((num) => rankMap.get(num));
};
