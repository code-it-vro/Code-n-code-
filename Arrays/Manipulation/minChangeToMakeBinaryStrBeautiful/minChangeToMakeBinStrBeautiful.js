/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function (s) {
  let n = s.length;
  let minChanges = 0;

  // Process string in chunks of size 2
  for (let i = 0; i < n; i += 2) {
    // Count changes needed to make both characters 0
    let changes0 = (s[i] === "1" ? 1 : 0) + (s[i + 1] === "1" ? 1 : 0);
    // Count changes needed to make both characters 1
    let changes1 = (s[i] === "0" ? 1 : 0) + (s[i + 1] === "0" ? 1 : 0);

    // Add minimum of changes needed for this pair
    minChanges += Math.min(changes0, changes1);
  }

  return minChanges;
};
