/**
 * @param {string} expression - A boolean expression in the format described.
 * @return {boolean} - The result of evaluating the boolean expression.
 */
var parseBoolExpr = function (expression) {
  // We use a stack to process the characters of the expression
  let myStack = [];

  // Iterate over each character in the input expression
  for (let i of expression) {
    // If the character is not ')' or ',', we push it onto the stack
    if (i !== ")" && i !== ",") {
      myStack.push(i);
    }
    // When encountering ')', it means we've reached the end of a sub-expression
    else if (i === ")") {
      let space = []; // This array will hold the current sub-expression inside parentheses

      // Pop elements off the stack until we find '(' which starts the sub-expression
      while (myStack.length > 0 && myStack[myStack.length - 1] !== "(") {
        let c = myStack.pop(); // Pop each element and store in the space array
        space.push(c);
      }

      // Pop the opening '(' from the stack
      myStack.pop();

      // Now process the operator that was just before the '(' (it could be & or | or !)
      if (myStack.length > 0) {
        let operator = myStack.pop(); // Pop the operator (&, |, or !)
        let result = space[0]; // Initialize result with the first value in the sub-expression

        // If operator is AND (&), result is true only if all values are true (t)
        if (operator === "&") {
          for (let f of space) {
            result = result === "t" && f === "t" ? "t" : "f";
          }
        }
        // If operator is OR (|), result is true if at least one value is true (t)
        else if (operator === "|") {
          for (let f of space) {
            result = result === "t" || f === "t" ? "t" : "f";
          }
        }
        // If operator is NOT (!), we just negate the first value (only one value inside space)
        else {
          result = space[0] === "t" ? "f" : "t";
        }

        // Push the result of this sub-expression (either 't' or 'f') back onto the stack
        myStack.push(result);
      }
    }
  }

  // Return true if the last remaining value in the stack is 't', otherwise return false
  return myStack[myStack.length - 1] === "t" ? true : false;
};

// Example usage:
// expression = "&(|(f))"
// Step-by-step:
// 1. Evaluate |(f) --> false ('f'). Now the expression is "&(f)"
// 2. Evaluate &(f) --> false ('f'). The final result is 'false', so return false.
