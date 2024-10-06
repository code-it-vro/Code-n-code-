/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  // Step 1: Split both sentences into arrays of words
  let newSent1 = sentence1.split(" ");
  let newSent2 = sentence2.split(" ");

  // Step 2: Always make the longer sentence newSent1 for consistency
  if (newSent2.length > newSent1.length) {
    [newSent1, newSent2] = [newSent2, newSent1];
  }

  // Step 3: Initialize pointers to compare from start (i, k) and end (j, l)
  let i = 0,
    j = newSent1.length - 1;
  let k = 0,
    l = newSent2.length - 1;

  // Step 4: Compare words from the start of both sentences
  while (
    newSent1[i] === newSent2[k] &&
    i < newSent1.length &&
    k < newSent2.length
  ) {
    i++;
    k++;
  }

  // Step 5: Compare words from the end of both sentences
  while (newSent1[j] === newSent2[l] && j >= 0 && l >= 0) {
    j--;
    l--;
  }

  // Return true if the inner unmatched words fit within the bounds of newSent1
  return l < k;
};
