# Divide Player Into Team Of Equal Skill

## Problem Statement

#### You are given a positive integer array `skill` of even length `n` where `skill[i]` denotes the skill of the `i-th` player. Divide the players into `n / 2` teams of size 2 such that the total skill of each team is equal.The chemistry of a team is equal to the product of the skills of the players on that team.Return the sum of the chemistry of all the teams, or return `-1` if there is no way to divide the players into teams such that the total skill of each team is equal.


## Example 1:

**Input:**
skill = [3, 2, 5, 1, 3, 4]
**Output:**
**22**
**Explanation:**
Divide the players into the following teams: (1, 5), (2, 4), (3, 3), where each team has a total skill of 6.  
The sum of the chemistry of all the teams is:1 * 5 + 2 * 4 + 3 * 3 = 5 + 8 + 9 = **22**

## Example 2:

**Input:**
skill = [3, 4]
**Output:**
**12**
**Explanation:**
The two players form a team with a total skill of 7.  
The chemistry of the team is: 3 * 4 = 12

## Example 3:

**Input:**
skill = [1, 1, 2, 3]
**Output:**
**-1**
**Explanation:**
There is no way to divide the players into teams such that the total skill of each team is equal.


## Constraints:

- `2 <= skill.length <= 10^5`
- `skill.length` is even.
- `1 <= skill[i] <= 1000`

&nbsp;

&nbsp;

&nbsp;

&nbsp;


# Intuition

The goal is to divide the players into pairs such that each pair has an equal skill sum. To achieve this, we need a strategy to easily find pairs that sum to the same value. By sorting the array, the smallest and largest values can be paired together, which helps ensure that the sum of each pair is balanced across the array. Sorting allows us to apply a two-pointer approach efficiently.

---

# Approach

1. **Sort the array**: Sorting is critical to form valid pairs by comparing the smallest and largest values.
2. **Calculate the required team sum**: Use the total sum of the array to determine the sum that each pair should match.
3. **Initialize pointers**: Use two pointers, one at the start and one at the end of the sorted array, to create pairs.
4. **Check team validity**: For each pair, check if their sum matches the required skill sum. If any pair doesn't match, return `-1`.
5. **Calculate and return chemistry**: If all pairs are valid, calculate their chemistry (product of their skills) and return the total sum of chemistry; otherwise, return `-1` if no valid division is possible.

---

# Explanation:

We are tasked with dividing an array of players into teams where each team's total skill sum is equal. Sorting the array simplifies the process of forming valid teams because it allows us to pair the smallest and largest elements in the sorted array, ensuring that the sum is distributed evenly.

Using a two-pointer approach, we can quickly check if the sum of the players from both ends of the sorted array matches the required `skillRequired`. If any pair doesn't match, it's impossible to form valid teams, so we return `-1`.

---

# Time and Space Complexity:

## Time Complexity:
- Sorting the array takes `O(n log n)`, where `n` is the length of the array.
- Iterating through the array with two pointers takes `O(n)`.

Thus, the overall time complexity is **O(n log n)**.

## Space Complexity:
- We only use a few extra variables like `chemistry`, `left`, and `right`, so the space complexity is **O(1)** (constant space).
