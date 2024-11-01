/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function (s) {
  if (s.length < 3) return s;

  let result = s[0] + s[1]; // Start with the first two characters to handle edge cases
  let j = 0,
    k = 1;

  for (let i = 2; i < s.length; i++) {
    // Add the current character to result only if it doesn’t form three consecutive identical characters
    if (!(s[i] === s[j] && s[j] === s[k])) {
      result += s[i];
      j = k; // Update pointers to the last two characters in result
      k = i;
    } else {
      // Only `k` moves forward, maintaining a window of comparison for three characters
      k = i;
    }
  }

  return result;
};




// ------------------- alternate way for above code  ----------------------------

/**
 * @param {string} s
 * @return {string}
 */
var makeFancyString = function(s) {
    let result = '';
    let count = 1; // Count of consecutive characters
    
    // Initialize result with the first character
    result += s[0];
    
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            count = 1; // Reset count if current char differs from the previous
        }
        
        // Append the character only if we haven't reached three consecutive characters
        if (count < 3) {
            result += s[i];
        }
    }
    
    return result;
};
