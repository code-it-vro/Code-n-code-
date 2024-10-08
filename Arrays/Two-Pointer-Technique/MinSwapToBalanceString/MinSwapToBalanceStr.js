/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let imbalance = 0; // Track unmatched closing brackets ']'
  let swaps = 0; // Count of swaps required

  for (let i of s) {
    if (i === "[") {
      imbalance++; // Found an opening bracket, increase the balance
    } else {
      imbalance--; // Found a closing bracket, decrease the balance

      // If imbalance becomes negative, perform a swap
      if (imbalance < 0) {
        swaps++;
        imbalance = 1; // Reset imbalance after swap
      }
    }
  }
  return swaps;
};
