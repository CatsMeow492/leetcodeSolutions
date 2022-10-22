/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    let reversed = x.toString().split("").reverse().join("");
    // If x is less than 10 return false if x is equal to 0 return true
    if (x < 10 && x > 0 || x == 0) {
        return true
    }
    // If x is negative return false
    else if (x < 0 || x % 10 == 0 || x == 10) {
        return false
    }
    // Check if reversed array is equal to x
    else if (reversed.toString() == x.toString()) {
        return true
    } else {
        return false
    }
};

console.log(isPalindrome(10))
console.log(isPalindrome(0))
console.log(isPalindrome(-121))
console.log(isPalindrome(100))
console.log(isPalindrome(123))