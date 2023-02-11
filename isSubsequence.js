/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // Edge case handling 

    // Check if s is empty
    if (s.length === 0){
        return true;
    }
    // Check if t is empty
    if (t.length === 0){
        return false;
    }
    // Check if s is longer than t
    if (s.length > t.length){
        return false;
    }
    let j = 0;
    // Iterate while i is less than the length of s
    for (let i = 0; i < s.length; i++){
        // Check if t contains s[i]
        while (j < t.length && t[j] !== s[i]) {
            j++;
        }
        if (j === t.length) {
            return false;
        }
        j++;
    }
    return true;
};

// Test cases

console.log(isSubsequence("abc", "ahbgdc")); // true
console.log(isSubsequence("axc", "ahbgdc")); // false