# Kth Bit in Nth Binary String

##### Given two positive integers `n` and `k`, the binary string `Sn` is formed as follows:

- `S1 = "0"`
- For `i > 1`, `Si = Si - 1 + "1" + reverse(invert(Si - 1))`, where:
  - `+` denotes the concatenation operation,
  - `reverse(x)` returns the reversed string `x`,
  - `invert(x)` inverts all the bits in `x` (0 changes to 1 and 1 changes to 0).

### Example strings:
- `S1 = "0"`
- `S2 = "011"`
- `S3 = "0111001"`
- `S4 = "011100110110001"`

The task is to return the `k`-th bit in `Sn`. It is guaranteed that `k` is valid for the given `n`.

### Examples

#### Example 1:
**Input**: 
n = 3, k = 1

**Output**: 
"0"

**Explanation**: 
S3 is "0111001". The 1st bit is "0".

#### Example 2:
**Input**: 
n = 4, k = 11

**Output**: 
"1"

**Explanation**: 
S4 is "011100110110001". The 11th bit is "1".

### Constraints:
- `1 <= n <= 20`
- `1 <= k <= 2^n - 1`

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Approach & Intuition

1. **Recursive String Construction**:
   - The string `Sn` is constructed using a recursive relationship:
     - `S1 = "0"`.
     - For `i > 1`, `Si = Si-1 + "1" + reverse(invert(Si-1))`.
   - This means each subsequent string `Si` is formed by concatenating the previous string `Si-1`, the character `"1"`, and the reverse of the inverted `Si-1`.

2. **Inversion and Reversal**:
   - To invert a binary string, we change every `'0'` to `'1'` and every `'1'` to `'0'`.
   - After inversion, we reverse the string to complete the transformation.

3. **Iterative Construction**:
   - Instead of recursively constructing the entire string, the solution iterates from `S1` to `Sn`, progressively building larger strings.
   - Starting with `S1 = "0"`, we use a loop to build up to `Sn` by following the recursive rule.

4. **Key Optimization**:
   - The function only constructs `Sn` up to the necessary length and then directly accesses the `k`-th bit, reducing unnecessary operations for very large `n`.

5. **Return k-th Bit**:
   - Once `Sn` is fully constructed, the `k`-th bit (1-based index) is retrieved by accessing `current[k - 1]` (0-based index).

---

# Time Complexity

- **Time Complexity**: O(2^n), where `n` is the input.
  - The length of the string `Sn` grows exponentially as `2^n - 1`. This makes the solution's time complexity proportional to the length of the string.
  - Each construction step involves inverting and reversing strings, which also takes linear time relative to the length of the string.
  - In the worst case, we generate and process all `2^n - 1` characters.

---

# Space Complexity

- **Space Complexity**: O(2^n).
  - The space used is proportional to the size of the final string `Sn`, which grows exponentially with `n`. At most, we need space to store a string of size `2^n - 1`.
