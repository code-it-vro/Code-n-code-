# Rotate String

#### Given two strings `s` and `goal`, return `true` if and only if `s` can become `goal` after some number of shifts on `s`.
#### A shift on `s` consists of moving the leftmost character of `s` to the rightmost position.

- **Example**:
  - **Input**: `s = "abcde"`, `goal = "cdeab"`
  - **Output**: `true`
  
- **Constraints**:
  - `1 <= s.length, goal.length <= 100`
  - `s` and `goal` consist of lowercase English letters.

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Approach and Intuition

1. **Check Lengths**:
   - If `s` and `goal` are of different lengths, it’s impossible for `s` to be rotated to match `goal`. Thus, we can return `false` immediately in this case.

2. **Concatenate `s` with Itself**:
   - When we concatenate `s` with itself (i.e., `s + s`), any rotation of `s` will appear as a substring within this concatenated string. For example, if `s = "abcde"`, then `s + s = "abcdeabcde"`, which includes every possible rotation of `s`.

3. **Check for Substring**:
   - Now, we simply check if `goal` is a substring of `s + s`. If `goal` appears within `s + s`, then `s` can be rotated to match `goal`, and we return `true`. Otherwise, we return `false`.
  
# Complexity Analysis

- **Time Complexity**: (O(n)), where (n) is the length of `s`. The `includes` method, which searches for `goal` within `s + s`, operates in (O(n)).
- **Space Complexity**: (O(n)), due to the creation of the concatenated string `s + s`, which has a length of (2n).
