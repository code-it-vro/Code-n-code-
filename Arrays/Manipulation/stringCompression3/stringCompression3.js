/**
 * Compresses a given string `word` by counting consecutive characters up to a maximum of 9.
 * @param {string} word - The string to be compressed.
 * @return {string} - The compressed version of the string.
 */
var compressedString = function (word) {
  let compressed = ""; // Initialize the result string to store the compressed version
  let index = 0; // Index to traverse the input string

  // Loop through each character in the string
  while (index < word.length) {
    let count = 0; // Count occurrences of the current character up to a max of 9
    const currentChar = word[index]; // Current character to compress

    // Count up to 9 occurrences of the current character
    while (index < word.length && word[index] === currentChar && count < 9) {
      count++;
      index++;
    }

    // Append the count and character to the compressed string
    compressed += count.toString() + currentChar;
  }

  return compressed; // Return the fully compressed string
};
