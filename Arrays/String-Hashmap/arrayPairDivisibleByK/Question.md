# Check If Array Pairs Are Divisible by k

## Problem Statement

Given an array of integers `arr` of even length `n` and an integer `k`, we want to divide the array into exactly `n / 2` pairs such that the sum of each pair is divisible by `k`.

Return `true` if you can find a way to do that, or `false` otherwise.

### Examples

**Example 1:**
- **Input:** `arr = [1, 2, 3, 4, 5, 10, 6, 7, 8, 9], k = 5`
- **Output:** `true`
- **Explanation:** Pairs are `(1, 9)`, `(2, 8)`, `(3, 7)`, `(4, 6)`, and `(5, 10)`.

**Example 2:**
- **Input:** `arr = [1, 2, 3, 4, 5, 6], k = 7`
- **Output:** `true`
- **Explanation:** Pairs are `(1, 6)`, `(2, 5)`, and `(3, 4)`.

**Example 3:**
- **Input:** `arr = [1, 2, 3, 4, 5, 6], k = 10`
- **Output:** `false`
- **Explanation:** You can try all possible pairs to see that there is no way to divide `arr` into 3 pairs each with sum divisible by 10.

### Constraints
- `arr.length == n`
- `1 <= n <= 10^5`
- `n` is even.
- `-10^9 <= arr[i] <= 10^9`
- `1 <= k <= 10^5`

&nbsp;

&nbsp;

&nbsp;

&nbsp;


&nbsp;

## Intuition
1. **Understanding Divisibility**: 
   - For two numbers \( a \) and \( b \), their sum \( (a + b) \) is divisible by \( k \) if the sum of their remainders when divided by \( k \) is also divisible by \( k \).
   - Mathematically, this can be expressed as:
     \[
     (a \% k + b \% k) \% k = 0
     \]
   - This means that the remainders \( r_a = a \% k \) and \( r_b = b \% k \) must satisfy:
     \[
     r_a + r_b \equiv 0 \mod k
     \]
   - For a given remainder \( r \), there exists a complementary remainder \( k - r \) such that \( r + (k - r) = k \).

2. **Remainder Frequencies**: 
   - By counting how many times each remainder appears in the array, you can figure out how many pairs can potentially be formed.
   - For example, if you have a remainder \( r \) that appears \( m \) times, you can pair it with \( k - r \) which must also appear \( m \) times for all pairs to be valid.

3. **Special Cases**:
   - **Remainder 0**: The numbers that give a remainder of 0 when divided by \( k \) can only pair with each other. Thus, there must be an even count of these numbers for them to form pairs.
   - **Exact Half**: For any remainder \( r \) that is equal to \( k/2 \) (in cases where \( k \) is even), the same rule applies; they must also be in even quantities, as they can only pair among themselves.


4. **Iteration Over Remainders**: 
   - The approach involves iterating through possible remainders from 0 to \( k/2 \) and checking if the frequency of \( r \) equals the frequency of its complement \( k - r \). This ensures that each remainder can form valid pairs with its complement.



## Approach
- Frequency Counting: Create an array (remainderFreq) to store the frequency of the remainders when each element in arr is divided by k. The size of this array will be k.

- Calculate Remainders: Iterate through the array and compute the remainder of each number when divided by k. Adjust the remainder to be non-negative by using the formula ((num % k) + k) % k.

- Special Case for Remainder 0: Check if the count of numbers that give a remainder of 0 is even. If not, return false, since pairs cannot be formed.

- Check Complementary Remainders: For each possible remainder from 1 to k/2, check if the frequency of that remainder is equal to the frequency of its complement (k - rem). If they don't match for any pair, return false.

- Return True: If all checks are satisfied, return true, indicating that valid pairs can be formed.


## Complexity
- Time complexity: **O(n + k):**
The loop that calculates the frequencies runs in O(n) time, where n is the length of the input array.
The loop that checks the remainder frequencies runs in O(k) time. Since k is a constant related to the modulo operation, this can be considered as a fixed overhead.

- Space complexity: **O(k):**
The space used for the remainderFreq array is proportional to k, leading to a space complexity of O(k).