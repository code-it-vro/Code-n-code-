/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  // Helper function to invert and reverse a binary string
  function toInvertAndReverse(s) {
    let inverted = ""; // Initialize an empty string to hold the inverted version of s
    for (let i of s) {
      // For each character in string 's', invert it:
      // If it's '0', add '1' to inverted; if it's '1', add '0' to inverted
      inverted += i === "0" ? "1" : "0";
    }
    // Reverse the inverted string and return it
    return inverted.split("").reverse().join("");
  }

  let current = "0"; // Start with S1, which is always "0"

  // Loop from 2 to n to generate Sn from S1
  for (let i = 2; i <= n; i++) {
    // Generate the next string by concatenating:
    // - the current string (Si-1)
    // - the string "1"
    // - the inverted and reversed version of the current string (Si-1)
    current = current + "1" + toInvertAndReverse(current);

    // For example:
    // S1 = "0"
    // S2 = S1 + "1" + reverse(invert(S1)) = "0" + "1" + reverse(invert("0")) = "011"
    // S3 = S2 + "1" + reverse(invert(S2)) = "011" + "1" + reverse(invert("011")) = "0111001"
  }

  // Return the k-th bit of the final string, which is (k - 1) since indexing is 0-based
  return current[k - 1]; // Access the k-th bit of Sn (remember k is 1-based, arrays are 0-based)
};
