/**
 * @param {*} input
 * @returns
 */
function longestCommonPrefix(strs) {
    if (!strs.length) {
      return '';
    }
  
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
      while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.slice(0, -1);
        if (!prefix) {
          return '';
        }
      }
    }
    return prefix;
}


// This function takes an array of strings as input and returns the longest common prefix among them.
function test (strs) {
  // Iterate through the characters of the first string in the array.
  for (let i = 0; strs[0].length; i++) {
    // Iterate through the rest of the strings in the array.
    for (let j = 1; j < strs.length; j++) {
// Return the previous prefix if the current string does not start with it
if (strs[j].indexOf(strs[0].substring(0, i)) !== 0) {
  return strs[0].substring(0, i - 1);
}
    }
  }
}

