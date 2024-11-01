# Fancy String Problem


#### A fancy string is a string where no three consecutive characters are equal.
#### Given a string `s`, delete the minimum possible number of characters from `s` to make it fancy.
#### Return the final string after the deletion. It can be shown that the answer will always be unique.

##Example 1:
Input: `s = "leeetcode"`  
Output: `"leetcode"`  
Explanation:  
Remove an 'e' from the first group of 'e's to create `"leetcode"`.  
No three consecutive characters are equal, so return `"leetcode"`.

## Example 2:
Input: `s = "aaabaaaa"`  
Output: `"aabaa"`  
Explanation:  
Remove an 'a' from the first group of 'a's to create `"aabaaaa"`.  
Remove two 'a's from the second group of 'a's to create `"aabaa"`.  
No three consecutive characters are equal, so return `"aabaa"`.

## Example 3:
Input: `s = "aab"`  
Output: `"aab"`  
Explanation:  
No three consecutive characters are equal, so return `"aab"`.

## Constraints:
- \(1 \leq s.length \leq 10^5\)
- `s` consists only of lowercase English letters.

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;

# Intuition

The main idea is to iterate through the string and build a result string while ensuring no three consecutive characters are the same. This approach leverages a sliding three-character window to check if the last two characters in `result` match the current character. If they do, we skip the current character to prevent three consecutive matches.

# Step-by-Step Approach:

1. **Initialize Result**: Start with the first two characters of `s` in `result`. This allows us to easily handle cases where the string has fewer than three characters.
2. **Three-Character Window Check**: Traverse `s` starting from the third character, using indices `i`, `j`, and `k`:
   - `i` represents the current character in the loop.
   - `j` and `k` represent the last two characters added to `result`.
3. **Condition Check**: If `s[i]`, `s[j]`, and `s[k]` are all the same, skip `s[i]`. Otherwise, append `s[i]` to `result`.
4. **Update Pointers**: After appending `s[i]`, update `j` and `k` to maintain the three-character window.
5. **Final Result**: Return `result` after traversing all characters in `s`.

# Approach

1. **Initialize Result**: Start with the first two characters of `s` in the result string. This helps handle edge cases where the string length is less than 3.
2. **Three-Character Window Check**: Traverse the string with pointers `i`, `j`, and `k`, where:
   - `i` represents the current character in the loop.
   - `j` and `k` track the last two characters appended to `result`.
3. **Condition Check**: If the characters at positions `i`, `j`, and `k` are all equal, skip the current character `s[i]`. Otherwise, append `s[i]` to `result`.
4. **Update Pointers**: After appending `s[i]`, update `j` to `k` and `k` to `i` to keep the window of comparison moving forward.
5. **Final Result**: Return the `result` string after traversing `s`.