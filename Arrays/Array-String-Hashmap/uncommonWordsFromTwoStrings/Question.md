

# Uncommon Words from Two Sentences


### A sentence is a string of single-space separated words where each word consists only of lowercase letters.
### A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.
### Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.

 

### Example 1:

Input: s1 = "this apple is sweet", s2 = "this apple is sour"
Output: ["sweet","sour"]

Explanation:
The word "sweet" appears only in s1, while the word "sour" appears only in s2.

### Example 2:

Input: s1 = "apple apple", s2 = "banana"
Output: ["banana"]

 
### Constraints:

1 <= s1.length, s2.length <= 200
s1 and s2 consist of lowercase English letters and spaces.
s1 and s2 do not have leading or trailing spaces.
All the words in s1 and s2 are separated by a single space.









# ///////////////////////////////// Approcah and explanation below ///////////////////////////




## Approach:
Split Sentences: First, split both sentences s1 and s2 into arrays of words.
Count Occurrences: Create an object temp to store the count of each word across both sentences.
Filter Uncommon Words: Filter out words that only appear exactly once from the combined list of words.


## Explanation:
Splitting: s1.split(' ') and s2.split(' ') convert sentences into arrays of words.
Word Counting: The temp object stores the number of times each word appears across both sentences. If the word appears for the first time, its value is set to 1, otherwise, it's incremented.
Unique Words: The Set removes duplicate entries in the array, ensuring we process each word only once when filtering.
Final Filter: Words that appear exactly once (i.e., temp[word] == 1) are considered uncommon and pushed into the answer array.