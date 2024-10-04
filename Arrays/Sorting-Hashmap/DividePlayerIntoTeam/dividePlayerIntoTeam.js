/**
 * @param {number[]} skill
 * @return {number}
 */
var dividePlayers = function (skill) {
  // Step 1: Sort the array in ascending order
  // Sorting is necessary to easily pair the smallest and largest values
  skill.sort((a, b) => a - b);

  // Step 2: Calculate the total sum of skills
  let totalSum = skill.reduce((acc, res) => acc + res, 0);

  // Step 3: Calculate the required skill sum for each team
  // This is based on the average skill per player multiplied by 2
  let skillRequired = (totalSum / skill.length) * 2;

  // Step 4: Initialize variables for chemistry calculation
  let chemistry = 0;
  let left = 0;
  let right = skill.length - 1;

  // Step 5: Traverse the sorted array, pairing smallest and largest values
  while (left < right) {
    let currentSum = skill[left] + skill[right];

    // If the current pair's sum is not equal to the required skill sum, return -1
    if (currentSum !== skillRequired) {
      return -1;
    }

    // Calculate chemistry (product of paired skills) and add to the total
    chemistry += skill[left] * skill[right];

    // Move to the next pair
    left++;
    right--;
  }

  // Return the total chemistry of all valid pairs
  return chemistry;
};
