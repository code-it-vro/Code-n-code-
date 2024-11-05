# Problem: Minimum Changes to Make Binary String Beautiful

You are given a 0-indexed binary string `s` having an even length. A string is beautiful if it's possible to partition it into one or more substrings such that:

- Each substring has an even length.
- Each substring contains only 1's or only 0's.

You can change any character in `s` to 0 or 1.

Return the minimum number of changes required to make the string `s` beautiful.

--- 

## Example 1
**Input:** `s = "1001"`  
**Output:** `2`  
**Explanation:** We change `s[1]` to `1` and `s[3]` to `0` to get string `"1100"`. It can be seen that the string `"1100"` is beautiful because we can partition it into `"11|00"`. It can be proven that `2` is the minimum number of changes needed to make the string beautiful.

## Example 2
**Input:** `s = "10"`  
**Output:** `1`  
**Explanation:** We change `s[1]` to `1` to get string `"11"`. It can be seen that the string `"11"` is beautiful because we can partition it into `"11"`. It can be proven that `1` is the minimum number of changes needed to make the string beautiful.

## Example 3
**Input:** `s = "0000"`  
**Output:** `0`  
**Explanation:** We don't need to make any changes as the string `"0000"` is beautiful already.

## Example 4
**Input:** `s = "1100"`  
**Output:** `0`  
**Explanation:** The string `"1100"` is already beautiful, so no changes are needed.

### Example 5
**Input:** `s = "1010"`  
**Output:** `2`  
**Explanation:** We change `s[0]` to `0` and `s[2]` to `1` to get string `"0000"`. It can be seen that the string `"0000"` is beautiful because we can partition it into `"00|00"`.

---

## Constraints
- `2 <= s.length <= 10^5`
- `s` has an even length.
- `s[i]` is either '0' or '1'.

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Approach

1. **Chunk Processing**: The string is processed in chunks of size 2 since we want to ensure that each substring has an even length. For every pair of characters (e.g., `s[i]` and `s[i + 1]`), we determine the minimum changes needed to make them both either `0`s or `1`s.

2. **Counting Changes**: For each pair:
   - Count how many changes are needed to convert both characters to `0`.
   - Count how many changes are needed to convert both characters to `1`.
   - The minimum of these two counts for each pair is added to a running total of `minChanges`.

3. **Final Calculation**: After processing the entire string, return the total count of changes needed.

---


## Code Explanation

The function `minChanges` processes the binary string `s` to determine the minimum number of character changes required to make it "beautiful" (i.e., partitionable into even-length substrings of all `0`s or all `1`s).

1. **Initialization**:
   - `n` is assigned the length of the string `s`.
   - `minChanges` is initialized to `0`, which will hold the total number of changes needed.

2. **Processing the String in Pairs**:
   - A `for` loop iterates over the string in increments of `2`, effectively processing each pair of characters:
     - For each pair `s[i]` and `s[i + 1]`, the function counts the changes required to make both characters `0` and both characters `1`.
     - `changes0` counts how many changes are needed to convert both characters to `0`. This is done by checking if each character is `1`.
     - `changes1` counts how many changes are needed to convert both characters to `1`. This is done by checking if each character is `0`.

3. **Calculating Minimum Changes**:
   - The minimum of `changes0` and `changes1` for the current pair is added to `minChanges`.

4. **Return Statement**:
   - After processing all pairs, the total `minChanges` is returned.

---

## Complexity Analysis

- **Time Complexity**: O(n)
  - The algorithm iterates through the string in steps of 2, leading to a linear time complexity with respect to the length of the input string `s`.

- **Space Complexity**: O(1)
  - The function uses a constant amount of space for variables (`n`, `minChanges`, `changes0`, and `changes1`), regardless of the input size.
