/**
 * @param {string} s
 * @return {number}
 */
var minimumSteps = function (s) {
  // Convert the string to an array for easier manipulation.
  let arr = s.split("");

  let black = 0; // Counter for the number of black balls (1s) encountered.
  let swap = 0; // Counter for the minimum number of swaps needed.

  // Traverse through each ball in the array
  for (let i of arr) {
    // If it's a white ball (0), we add the number of black balls
    // encountered so far to the swap count, because each black ball
    // that was seen earlier would need to swap with this white ball.
    if (i == 0) {
      swap += black;
    }
    // If it's a black ball (1), we increment the black ball counter.
    else {
      black++;
    }
  }
  // Return the total number of swaps needed to group black balls to the right.
  return swap;
};

// Example: s = "101"
// Initial array: ['1', '0', '1']
// Step 1: black = 0, swap = 0
// Step 2: Encounter '1' (black ball), increment black -> black = 1, swap = 0
// Step 3: Encounter '0' (white ball), swap += black -> swap = 1, black = 1
// Step 4: Encounter '1' (black ball), increment black -> black = 2, swap = 1
// Output: The minimum steps required are 1.
