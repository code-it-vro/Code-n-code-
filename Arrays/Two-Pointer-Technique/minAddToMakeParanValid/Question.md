# Minimum Add to Make Valid Parentheses Valid

#### We are given a parentheses string `s` that consists of only opening `(` and closing `)` parentheses. Our task is to determine the minimum number of moves (insertions) required to make the string valid. A valid parentheses string must follow these rules:
1. It is an empty string, or
2. It can be written as `AB`, where both `A` and `B` are valid parentheses strings, or
3. It can be written as `(A)`, where `A` is a valid parentheses string.

---

### Example 1:
- Input: `s = "())"`
- Output: `1`
- Explanation: We can add one opening parenthesis at the beginning to make it valid as `"()())"`.

### Example 2:
- Input: `s = "((("`
- Output: `3`
- Explanation: We need to add three closing parentheses to make it valid as `"((()))"`.

---

## Constraints:
- `1 <= s.length <= 1000`
- `s[i]` is either `'('` or `')'`.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

--- 

## Intution
The task is to determine the minimum number of parentheses that must be inserted to make a given parentheses string valid. A valid parentheses string follows specific rules:
- It is either an empty string.
- It can be written as a concatenation of two valid strings, denoted by `AB`.
- It can be enclosed by valid parentheses `(A)`.

We can achieve this in **linear time** by keeping track of unmatched opening and closing parentheses as we iterate through the string.

---

## Approach:

1. **Two Counters:**
   - We will maintain two counters:
     - `open`: To keep track of unmatched opening parentheses `(`.
     - `close`: To count how many unmatched closing parentheses `)` are needed to balance the string.

2. **Single Pass Through the String:**
   - For each character in the string:
     - If it's an opening parenthesis `'('`, we increment the `open` counter.
     - If it's a closing parenthesis `')'`, we check if there's an unmatched opening parenthesis:
       - If yes (`open > 0`), we decrement `open` as we have found a matching pair.
       - If no (`open == 0`), we increment the `close` counter because this closing parenthesis doesn't have a matching opening parenthesis.

3. **Result:**
   - After iterating through the string, the final number of unmatched opening and closing parentheses will give us the minimum moves required to balance the string.
   - The total result is the sum of `open` (remaining unmatched opening parentheses) and `close` (unmatched closing parentheses).

---

## Time Complexity:
- **Time Complexity:** `O(n)` where `n` is the length of the string `s`. We only traverse the string once.
- **Space Complexity:** `O(1)`, since we are only using two integer variables to store the count of unmatched parentheses.