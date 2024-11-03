/**
 * @param {string} s - The original string to be rotated.
 * @param {string} goal - The target string to match with rotations of s.
 * @return {boolean} - Returns true if s can be rotated to match goal, otherwise false.
 */
var rotateString = function (s, goal) {
  // Step 1: Check if the lengths of s and goal are different.
  // If they are not the same length, there's no way for s to become goal through rotations.
  if (s.length !== goal.length) return false;

  // Step 2: Concatenate s with itself. This creates a new string that contains all possible rotations of s.
  // For example, if s = "abcde", then s + s = "abcdeabcde", which includes all possible rotations:
  // "abcde", "bcdea", "cdeab", "deabc", "eabcd".
  let doubleS = s + s;

  // Step 3: Check if goal exists as a substring within doubleS.
  // If goal is a rotation of s, it should appear within doubleS.
  return doubleS.includes(goal);
};
