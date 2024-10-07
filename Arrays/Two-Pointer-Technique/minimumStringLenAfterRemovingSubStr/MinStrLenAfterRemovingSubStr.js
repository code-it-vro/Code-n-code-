/**
 * @param {string} s
 * @return {number}
 */
var minLength = function (s) {
  // Step 1: Initialize an empty array to use as a stack
  let st = [];

  // Step 2: Iterate through each character in the string
  for (let i of s) {
    // If the current character is 'B' and the top of the stack is 'A', pop 'A'
    if (i == "B" && st.length > 0 && st[st.length - 1] == "A") {
      st.pop();
    }
    // If the current character is 'D' and the top of the stack is 'C', pop 'C'
    else if (i == "D" && st.length > 0 && st[st.length - 1] == "C") {
      st.pop();
    }
    // Otherwise, push the current character onto the stack
    else {
      st.push(i);
    }
  }
  // Step 4: Return the size of the stack, which represents the remaining characters
  return st.length;
};
