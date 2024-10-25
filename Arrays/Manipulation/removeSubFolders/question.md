# Remove sub-folders from the file system 


#### Given a list of folders `folder`, return the folders after removing all sub-folders in those folders. You may return the answer in any order.

#### If a `folder[i]` is located within another `folder[j]`, it is called a sub-folder of it. A sub-folder of `folder[j]` must start with `folder[j]`, followed by a "/". For example, "/a/b" is a sub-folder of "/a", but "/b" is not a sub-folder of "/a/b/c".

#### The format of a path is one or more concatenated strings of the form: '/' followed by one or more lowercase English letters.

#### For example, "/leetcode" and "/leetcode/problems" are valid paths while an empty string and "/" are not.

---


## Example 1
**Input:** 
folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
**Output:** 
["/a","/c/d","/c/f"]
**Explanation:** 
Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

## Example 2
**Input:** 
folder = ["/a","/a/b/c","/a/b/d"]
**Output:** 
["/a"]
**Explanation:** 
Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".

## Example 3
**Input:** 
folder = ["/a/b/c","/a/b/ca","/a/b/d"]
**Output:** 
["/a/b/c","/a/b/ca","/a/b/d"]

---

### Constraints
- `1 <= folder.length <= 4 * 10^4`
- `2 <= folder[i].length <= 100`
- `folder[i]` contains only lowercase letters and '/'.
- `folder[i]` always starts with the character '/'.
- Each folder name is unique.

---

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Intuition
The problem requires filtering out subfolders from a list of folder paths. Subfolders have a parent folder followed by a `/`. To solve this problem, we can sort the folder paths lexicographically (alphabetically) so that any subfolder will follow its parent folder in the sorted list. This allows us to easily identify and skip subfolders.

# Approach
1. **Sort the Folder Paths**: Sorting the paths lexicographically will ensure that subfolders are directly after their parent folders. For example, if `"/a"` is a parent folder, `"/a/b"` and `"/a/c"` will follow it in the sorted list.
2. **Initialize a Result Array**: Use an empty `result` array to keep track of top-level folders (i.e., folders that are not subfolders of previously added folders).
3. **Iterate Over the Sorted Folders**:
   - For each folder path `f`:
     - If `result` is empty, add `f` to `result`.
     - If `f` is not a subfolder of the last folder in `result`, add `f` to `result`.
   - To check if `f` is a subfolder of the last folder in `result`, compare the beginning of `f` with the last added folder plus a `/`.
4. **Return the `result` Array**: This array will only contain top-level folders.

# Complexity Analysis
- **Time Complexity**:
  - Sorting the folder paths takes **O(n log n)**, where `n` is the number of folder paths.
  - Iterating through each folder takes **O(n)**.
  - Overall: **O(n log n)** due to sorting.
  
- **Space Complexity**:
  - The result array takes **O(n)** space to store top-level folders.
  - The sorting operation may require additional space, but it depends on the sorting algorithm.