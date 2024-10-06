# Sentence Similarity 3

### You are given two strings `sentence1` and `sentence2`, each representing a sentence composed of words. A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of only uppercase and lowercase English characters. Two sentences `s1` and `s2` are considered similar if it is possible to insert an arbitrary sentence (possibly empty) inside one of these sentences such that the two sentences become equal. Note that the inserted sentence must be separated from existing words by spaces.

## For example:

- s1 = "Hello Jane" and s2 = "Hello my name is Jane" can be made equal by inserting "my name is" between "Hello" and "Jane" in s1.
- s1 = "Frog cool" and s2 = "Frogs are cool" are not similar, since although there is a sentence "s are" inserted into s1, it is not separated from "Frog" by a space.

Given two sentences `sentence1` and `sentence2`, return **true** if `sentence1` and `sentence2` are similar. Otherwise, return **false**.

### Example 1:
Input: 
sentence1 = "My name is Haley", 
sentence2 = "My Haley"

Output: `true`

Explanation: sentence2 can be turned to sentence1 by inserting "name is" between "My" and "Haley".

### Example 2:
Input: 
sentence1 = "of", 
sentence2 = "A lot of words"

Output: `false`

Explanation: No single sentence can be inserted inside one of the sentences to make it equal to the other.

### Example 3:
Input: 
sentence1 = "Eating right now", 
sentence2 = "Eating"

Output: `true`

Explanation: sentence2 can be turned to sentence1 by inserting "right now" at the end of the sentence.

### Constraints:
- `1 <= sentence1.length, sentence2.length <= 100`
- sentence1 and sentence2 consist of lowercase and uppercase English letters and spaces.
- The words in sentence1 and sentence2 are separated by a single space.

&nbsp;

&nbsp;

&nbsp;

&nbsp;

### Intuition:
We aim to check whether the words from the start and end of two sentences are the same, and whether we can insert some words in one of the sentences to make them equal. By checking if both the start and end match, we can conclude whether one sentence can be turned into the other through insertion.

### Approach:
1. Split the sentences into arrays of words.
2. Ensure the longer sentence is always used as `newSent1` for comparison.
3. Use two pointers (`i` and `k`) to check if the words from the start of both sentences are the same.
4. Use two pointers (`j` and `l`) to check if the words from the end of both sentences are the same.
5. If the middle unmatched portion of one sentence can fit within the other, return true.

### Explanation:
- The core idea is to check if the beginning and ending sequences of the two sentences match.
- If sentence1 is longer, check if sentence2 is a prefix and suffix of sentence1, leaving some middle part in sentence1 that can be considered "inserted."
- We reverse the logic for shorter sentences as well by swapping the inputs.

### Time Complexity:
- **O(n + m)** where `n` is the length of `sentence1` and `m` is the length of `sentence2`. This is because we iterate over both arrays of words from the start and end.

### Space Complexity:
- **O(n + m)** due to the space used by the arrays created from splitting the sentences.
