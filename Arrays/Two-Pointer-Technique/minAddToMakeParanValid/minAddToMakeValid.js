/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  let open = 0,
    close = 0;

  for (let char of s) {
    if (char === "(") {
      open++;
    } else if (open > 0) {
      open--; // We have a matching '(' for this ')', so decrease open count
    } else {
      close++; // No matching '(', so increment close
    }
  }
  return open + close; // Total unmatched '(' + unmatched ')'
};
