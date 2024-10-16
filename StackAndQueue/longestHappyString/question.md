# Longest Happy String

### A string s is called happy if it satisfies the following conditions:

```
- s only contains the letters 'a', 'b', and 'c'.
- s does not contain any of "aaa", "bbb", or "ccc" as a substring.
- s contains at most a occurrences of the letter 'a'.
- s contains at most b occurrences of the letter 'b'.
- s contains at most c occurrences of the letter 'c'. 
```

#### Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

#### A substring is a contiguous sequence of characters within a string.

--- 

## Example 1:
**Input:** a = 1, b = 1, c = 7  
**Output:** "ccaccbcc"  
Explanation: "ccbccacc" would also be a correct answer.

### Example 2:
**Input:** a = 7, b = 1, c = 0  
**Output:** "aabaa"  
Explanation: It is the only correct answer in this case.

---

### Constraints:
- 0 <= a, b, c <= 100
- a + b + c > 0

--- 

&nbsp;

&nbsp;

&nbsp;

&nbsp;




# Intuition:
- The goal is to build the longest string possible while ensuring that no character appears more than twice consecutively.
- To achieve this efficiently, we can use a **greedy approach** combined with a **max heap** (priority queue) to always pick the character that appears the most and add it to the string. This maximizes the length of the string as we progress.
- To prevent three consecutive occurrences of the same character, we need to check the last two characters in the string before adding the next one.

# Approach:
1. **Max Heap (Priority Queue)**: 
   - We use a max heap to always get the character with the highest remaining count. This ensures that we use the most frequent character first and don't end up with a scenario where no valid character can be added.
   - Each heap entry contains the count of remaining characters and the character itself, so the heap is ordered based on the character frequency.

2. **Greedy Addition**: 
   - First, we try to add the character with the highest frequency (from the heap) to the result string.
   - Before adding, we check if it would cause three consecutive occurrences of the same character. If it does, we add the next most frequent character instead (from the heap).
   - After adding a character, its count is reduced, and if it's still available, it's pushed back into the heap.

3. **Termination**: 
   - The process stops when no valid characters can be added (i.e., when the heap is empty or we can't add any more characters without violating the rule).

# Time Complexity:
- **Heap Operations**: Inserting and removing from a heap takes O(log n), where n is the number of different characters (in this case, at most 3).
- **Overall Complexity**: The total time complexity is O(n log 3), where n is the sum of all the counts (`a + b + c`). Since the number of unique characters is small (just 3), log 3 is a constant, so the complexity simplifies to O(n).

### Space Complexity:
- **Heap Storage**: We store at most 3 elements in the heap at any given time (one for each character), so the space complexity is O(1) since the heap size is constant.

# Program Execution Walkthrough

Let's break down how the program executes with a test case where `a = 1`, `b = 1`, and `c = 7`. The goal is to construct the longest string while adhering to the rules (no more than two consecutive occurrences of any character).

### Example Test Case: `a = 1`, `b = 1`, `c = 7`

1. **Initialization**:
   - The program starts by initializing a **max heap** to manage the character frequencies.
   - The heap is populated based on the counts of `a`, `b`, and `c` (if they are greater than 0):
     ```javascript
     maxHeap.enqueue([1, 'a']);
     maxHeap.enqueue([1, 'b']);
     maxHeap.enqueue([7, 'c']);
     ```
   - The heap will look like this: `[ [7, 'c'], [1, 'b'], [1, 'a'] ]` (heap sorted by the character count).

2. **First Iteration**:
   - The program checks the top of the heap (the most frequent character, which is `'c'` with count 7).
   - Since there are no consecutive `'c'` characters in the result string (`result = ""`), it appends `'c'` to the result:
     ```javascript
     result += 'c';  // result = "c"
     ```
   - The count of `'c'` is now 6, so the heap is updated:
     ```javascript
     maxHeap.enqueue([6, 'c']);
     ```
   - The heap is now: `[ [6, 'c'], [1, 'b'], [1, 'a'] ]`.

3. **Second Iteration**:
   - The program again checks the most frequent character, which is `'c'` (count 6). It doesn't create three consecutive `'c'` characters, so it adds another `'c'`:
     ```javascript
     result += 'c';  // result = "cc"
     ```
   - The count of `'c'` is now 5, so the heap is updated:
     ```javascript
     maxHeap.enqueue([5, 'c']);
     ```
   - The heap is now: `[ [5, 'c'], [1, 'b'], [1, 'a'] ]`.

4. **Third Iteration**:
   - Now, the program looks at the top of the heap again. The most frequent character is `'c'` (count 5), but appending `'c'` would create three consecutive `'c'` characters.
   - Since the heap contains other characters, the program dequeues the next most frequent character, which is `'b'` (count 1). It appends `'b'` to the result:
     ```javascript
     result += 'b';  // result = "ccb"
     ```
   - The count of `'b'` is now 0, so it is no longer added back into the heap.
   - The heap is now: `[ [5, 'c'], [1, 'a'] ]`.

5. **Fourth Iteration**:
   - The program checks the top of the heap again. The most frequent character is `'c'` (count 5). It appends another `'c'`:
     ```javascript
     result += 'c';  // result = "ccbc"
     ```
   - The count of `'c'` is now 4, and the heap is updated:
     ```javascript
     maxHeap.enqueue([4, 'c']);
     ```
   - The heap is now: `[ [4, 'c'], [1, 'a'] ]`.

6. **Fifth Iteration**:
   - The program repeats similar steps, appending characters `'c'` and `'a'` based on their frequencies, ensuring no three consecutive occurrences of the same character.
   - It continues until all characters are appended based on the given counts, and the heap becomes empty.

### Final Result:
After several iterations, the program successfully constructs the longest string adhering to the constraints:

