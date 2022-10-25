/** `Given two string arrays word1 and word2, return true if the two arrays represent the same string, and false otherwise.
A string is represented by an array if the array elements concatenated in order forms the string.    */
/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    // For each element in word1, add it to a string
    let word1String = "";
    for (let i = 0; i < word1.length; i++) {
        word1String += word1[i];
    }
    // For each element in word2, add it to a string
    let word2String = "";
    for (let i = 0; i < word2.length; i++) {
        word2String += word2[i];
    }
    // Compare the two strings
    return(word1String === word2String);
};