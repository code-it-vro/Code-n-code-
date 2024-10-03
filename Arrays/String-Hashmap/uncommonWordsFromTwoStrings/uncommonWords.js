/**
 * @param {string} s1 - First sentence
 * @param {string} s2 - Second sentence
 * @return {string[]} - Array of words that appear exactly once in both sentences
 */


var uncommonFromSentences = function (s1, s2) {
  // Split both sentences into arrays of words
  let s3 = s1.split(" ");
  let s4 = s2.split(" ");

  // Create an object to keep track of word counts
  let temp = {};

  // Combine both arrays and count occurrences of each word
  let arr = [...s3, ...s4];
  arr.forEach((word) => {
    // If the word is not in temp, initialize it to 1, otherwise increment its count
    temp[word] = temp[word] === undefined ? 1 : temp[word] + 1;
  });

  // Convert array to a set to ensure unique words
  arr = new Array(...new Set(arr));

  // Initialize an array to store the uncommon words
  let answer = [];

  // Loop through the unique words, checking their count in 'temp'
  for (let i of arr) {
    if (temp[i] == 1) {
      // Only add the word if it appears exactly once
      answer.push(i);
    }
  }

  // Return the array of uncommon words
  return answer;
};
