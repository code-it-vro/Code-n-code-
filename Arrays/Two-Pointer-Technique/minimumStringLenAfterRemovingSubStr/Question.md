# Minimum String Length After Removing Substring

### You are given a string `s` consisting only of uppercase English letters. You can apply some operations to this string where, in one operation, you can remove any occurrence of one of the substrings **"AB"** or **"CD"** from `s`. Return the minimum possible length of the resulting string that you can obtain. Note that the string concatenates after removing the substring and could produce new **"AB"** or **"CD"** substrings.

---

#### Example 1:
**Input**:  
`s = "ABFCACDB"`

**Output**:  
`2`

**Explanation**:  
We can do the following operations:
- Remove the substring `"ABFCACDB"`, so `s = "FCACDB"`.
- Remove the substring `"FCACDB"`, so `s = "FCAB"`.
- Remove the substring `"FCAB"`, so `s = "FC"`.  
So the resulting length of the string is `2`.  
It can be shown that it is the minimum length that we can obtain.

---

#### Example 2:
**Input**:  
`s = "ACBBD"`

**Output**:  
`5`

**Explanation**:  
We cannot do any operations on the string so the length remains the same.

---

### Constraints:
- `1 <= s.length <= 100`
- `s` consists only of uppercase English letters.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Intuition:
The problem asks to reduce the string by removing adjacent pairs "AB" or "CD" repeatedly until no such pair exists. This is essentially a stack-based problem where we can track the characters and remove pairs when they meet the required conditions.

# Approach:
1. **Stack Initialization**: We use an array to simulate the stack. This helps us track the characters as we process them.
   
2. **Iterating the String**: We loop through each character in the string. If the current character and the top of the stack form either the pair "AB" or "CD", we pop the stack (remove the pair). Otherwise, we push the current character onto the stack.

3. **Stack Operations**: The stack grows and shrinks dynamically based on whether we find and remove pairs or not. If no matching pair is found, we add the character to the stack.

4. **Final Output**: After processing the entire string, the stack contains the remaining characters that couldn't be reduced. The length of this stack gives us the final reduced string length.

# Complexity:
- **Time Complexity**: `O(n)` where `n` is the length of the input string. Each character is pushed and popped from the stack at most once.
- **Space Complexity**: `O(n)` for the stack that stores the characters.