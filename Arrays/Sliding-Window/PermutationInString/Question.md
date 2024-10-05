# Permutaion in a String


## Problem Statement

### Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.In other words, return `true` if one of `s1`'s permutations is a substring of `s2`.

## Example 1:
- **Input**: 
  - `s1 = "ab"`, `s2 = "eidbaooo"`
- **Output**: 
  - `true`
- **Explanation**: 
  - `s2` contains one permutation of `s1` ("ba").

## Example 2:
- **Input**: 
  - `s1 = "ab"`, `s2 = "eidboaoo"`
- **Output**: 
  - `false`

## Constraints:
- `1 <= s1.length, s2.length <= 10^4`
- `s1` and `s2` consist of lowercase English letters.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

## Intuition

The problem is asking whether any permutation of string `s1` is a substring of string `s2`. We can think of this as checking if there is any substring in `s2` of length equal to `s1` that contains the same characters (with the same frequencies) as `s1`. 

We can solve this using a sliding window approach with two frequency maps:
- One map to store the frequency of characters in `s1`.
- Another map to track the frequency of characters in the current window of `s2`.

The key idea is to maintain a window of size `n` (length of `s1`) as we slide it over `s2`. At each step, we update the window's frequency map and check if it matches `s1`'s frequency map. If they are equal, it means a permutation of `s1` is found.

## Approach

1. **Base Case**: If the length of `s1` is greater than `s2`, it's impossible to have a permutation, so we return `false`.
2. **Initialize Frequency Maps**: 
   - Create a map for `s1`'s character frequencies.
   - Create another map for the sliding window over `s2`.
3. **Sliding Window**: 
   - Start sliding a window of size `n` over `s2`.
   - For each new character added to the window, update the window map.
   - If the window size exceeds `n`, remove the leftmost character from the window map.
4. **Check for Permutation**: 
   - At each step, if the frequency maps of `s1` and the current window match, return `true`.
5. **Return False**: 
   - If no matching window is found after processing `s2`, return `false`.

## Complexity

- **Time Complexity**: `O(m)`, where `m` is the length of `s2`. We scan through the entire string `s2` once with a sliding window of size `n` (length of `s1`). For each window position, we update character frequencies and compare maps, which takes constant time for each comparison.

- **Space Complexity**: `O(1)` for the sliding window map comparison, as the map size is limited to the number of unique characters in `s1` and `s2` (which is at most 26 for lowercase English letters). The maps themselves take up constant space with respect to the input size.
