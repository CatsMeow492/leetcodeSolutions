/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    // Create a map of roman numerals to integers
    let romanMap = new Map()
    romanMap.set('I', 1)
    romanMap.set('V', 5)
    romanMap.set('X', 10)
    romanMap.set('L', 50)
    romanMap.set('C', 100)
    romanMap.set('D', 500)
    romanMap.set('M', 1000)
    // Create a variable to hold the total
    let total = 0
    // Loop through the string
    for (let i = 0; i < s.length; i++){
        // If the current character is less than the next character
        if (romanMap.get(s[i]) < romanMap.get(s[i + 1])) {
            // Subtract the current character from the total
            total -= romanMap.get(s[i])
        }
        // Otherwise
        else {
            // Add the current character to the total
            total += romanMap.get(s[i])
        }
    }
    // Return the total
    return total
};