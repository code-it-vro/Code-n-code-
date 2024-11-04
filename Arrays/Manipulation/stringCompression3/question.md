# String Compression 3

#### Given a string `word`, compress it using the following algorithm:

1. Begin with an empty string `compressed`.
2. While `word` is not empty, use the following operation:
   - Remove a maximum length prefix of `word` made of a single character `c` repeating at most **9** times.
   - Append the length of the prefix followed by the character `c` to `compressed`.
3. Return the string `compressed`.

---

## Example 1:
**Input**: `word = "abcde"`  
**Output**: `"1a1b1c1d1e"`

Explanation:  
Apply the operation 5 times, choosing `"a"`, `"b"`, `"c"`, `"d"`, and `"e"` as the prefix in each operation. For each prefix, append `"1"` followed by the character to `compressed`.

## Example 2:
**Input**: `word = "aaaaaaaaaaaaaabb"`  
**Output**: `"9a5a2b"`

Explanation:  
Apply the operation 3 times, choosing `"aaaaaaaaa"`, `"aaaaa"`, and `"bb"` as the prefix in each operation.
- For prefix `"aaaaaaaaa"`, append `"9a"` to `compressed`.
- For prefix `"aaaaa"`, append `"5a"` to `compressed`.
- For prefix `"bb"`, append `"2b"` to `compressed`.

---

### Constraints:
- `1 <= word.length <= 10^5`
- `word` consists only of lowercase English letters.

---

## Intuition

To compress the string effectively, we need to count consecutive occurrences of each character but limit the count to a maximum of 9 per character block. This way, for a character sequence that repeats, we only need to store the count (up to 9) and the character itself, making the result string significantly shorter than the original if there are long repetitions.


## Approach

1. **Initialize Variables**: Set up an empty string `compressed` to hold the result and an `index` to traverse through `word`.
2. **Outer Loop (Traverse String)**: While `index` is less than the length of `word`, continue the compression process.
3. **Inner Loop (Count Characters)**:
   - Set `count` to 0 to start counting occurrences of the current character.
   - Use the `index` to keep track of the current position, and check if the character at `index` matches the current one (up to a maximum of 9 times).
4. **Update Compressed String**: After counting, append `count` and `currentChar` to the `compressed` string.
5. **Return Result**: Return the fully compressed string after the loop completes.

## Complexity

- **Time Complexity**: O(n), where n is the length of the input string `word`, as we are traversing the string once.
- **Space Complexity**: O(n), for storing the compressed output string in the worst case.
