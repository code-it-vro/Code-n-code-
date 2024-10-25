/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function (folder) {
  // Step 1: Sort the folder paths lexicographically (alphabetically)
  folder = folder.sort();

  // Initialize an empty array to store the result
  const result = [];

  // Step 2: Iterate through each folder in the sorted list
  for (let i in folder) {
    const f = folder[i];
    const lastFolderInResult = result[result.length - 1];

    // Step 3: Check if the current folder is not a subfolder of the last added folder
    // If 'result' is empty or 'f' is not a subfolder of the last item in 'result'
    if (
      result.length == 0 ||
      f.substring(0, lastFolderInResult.length + 1) !== lastFolderInResult + "/"
    ) {
      // Step 4: Add the current folder to 'result'
      result.push(f);
    }
  }

  // Step 5: Return the filtered list of top-level folders
  return result;
};


// this line can be writen like below line ->> f.substring(0, lastFolderInResult.length + 1) !== lastFolderInResult + "/"

//if(result.length == 0 || !f.startsWith(result[result.length -1] + "/")