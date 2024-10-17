/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  // Convert the number into an array of digits
  let arr = [];
  while (num > 0) {
    arr.unshift(num % 10); // Insert the last digit at the front
    num = Math.floor(num / 10);
  }

  let maxEle = arr[arr.length - 1]; // Initialize with the last digit
  let maxInd = arr.length - 1; // Index of the max element (start from the end)
  let minInd = -1,
    swapInd = -1; // Indices to track the swap candidates

  // Traverse the array from right to left
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxEle) {
      // Update the max element and its index if current is larger
      maxEle = arr[i];
      maxInd = i;
    } else if (arr[i] < maxEle) {
      // If we find a smaller element than maxEle, mark it as swap candidate
      minInd = i;
      swapInd = maxInd;
    }
  }

  // Perform the swap only if we found a valid swap candidate
  if (minInd !== -1) {
    let temp = arr[minInd];
    arr[minInd] = arr[swapInd];
    arr[swapInd] = temp;
  }

  // Convert the array back into a number
  return arr.reduce((acc, digit) => acc * 10 + digit, 0);
};
