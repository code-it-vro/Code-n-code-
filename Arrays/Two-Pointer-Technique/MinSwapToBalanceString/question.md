#  Minimum Number of Swaps to Make the String Balanced

#### You are given a 0-indexed string `s` of even length `n`. The string consists of exactly `n / 2` opening brackets `[` and `n / 2` closing brackets `]`.

#### A string is called balanced if and only if:
- It is the empty string, or
- It can be written as AB, where both A and B are balanced strings, or
- It can be written as [C], where C is a balanced string.

#### You may swap the brackets at any two indices any number of times. Return the minimum number of swaps to make `s` balanced.

---

### Example 1:
**Input**:  
`s = "][]["`  
**Output**:  
`1`  
**Explanation**:  
You can make the string balanced by swapping index 0 with index 3.  
The resulting string is `"[[]]"`.

---

### Example 2:
**Input**:  
`s = "]]][[["`  
**Output**:  
`2`  
**Explanation**:  
You can do the following to make the string balanced:  
- Swap index 0 with index 4.  
`s = "[]][]["`.  
- Swap index 1 with index 5.  
`s = "[[][]]"`.  
The resulting string is `"[[][]]"`.

---

### Example 3:
**Input**:  
`s = "[]"`  
**Output**:  
`0`  
**Explanation**:  
The string is already balanced.

---

### Constraints:
- `n == s.length`
- `2 <= n <= 10^6`
- `n` is even.
- `s[i]` is either `[` or `]`.
- The number of opening brackets `[` equals `n / 2`, and the number of closing brackets `]` equals `n / 2`.


&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Intuition:
The problem requires balancing a string of brackets (`[` and `]`) by performing the minimum number of swaps. A swap can balance one pair of unmatched brackets, and the goal is to ensure that every closing bracket `]` has a corresponding opening bracket `[`.

**Key Insight**:
- The balance between opening `[` and closing `]` brackets must be maintained. Whenever the number of closing brackets exceeds the opening ones at any point, a swap is required.
- We can track this using a simple counter (`imbalance`), which indicates how many unmatched closing brackets `]` exist at any point. When the balance goes negative (i.e., more closing than opening brackets), we perform a swap to correct the imbalance.

# Approach:
1. **Initialization**: 
   - Use a variable `imbalance` to track the difference between opening and closing brackets as we traverse the string.
   - Use `swaps` to count the number of required swaps.

2. **Traverse the String**:
   - For each character in the string:
     - If it is an opening bracket `[`, increase the `imbalance` (since we have an extra opening bracket).
     - If it is a closing bracket `]`, decrease the `imbalance` (since we found a closing bracket).
     - If `imbalance` goes negative (more closing brackets than opening ones), increment the `swaps` counter and reset the imbalance to 1 (indicating a swap was made).

3. **Return the Result**: 
   - The final value of `swaps` will be the minimum number of swaps needed to balance the string.

# Time Complexity:
- **O(n)**: We iterate through the string once, where `n` is the length of the string. Each operation within the loop (checking and updating the balance) takes constant time.

# Space Complexity:
- **O(1)**: We only use a few variables (`imbalance` and `swaps`) to keep track of the state, so the space complexity is constant regardless of the input size.