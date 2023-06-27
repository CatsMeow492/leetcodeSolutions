let strs = ['flower', 'flow', 'flight'];
// // Access flower in the array and log to console
// console.log(strs[0]);
// // Access the length of flower in the array and log to console
// console.log(strs[0].length);
// // Access the index of letter w in flower
// console.log(strs[0].indexOf('w'));
// // Log the substring of flower from index 3 to 5
// console.log(strs[0].substring(3, 5));
// // Log all elements of the array iteratively
// for (let i = 0; i < strs.length; i++) {
//     console.log(strs[i]);
//     }
// // Log all letters of flower iteratively
// for (let i = 0; i < strs[0].length; i++) {
//     console.log(strs[0][i]);
//     }
// Log all letters of flower iteratively backwards
// for (let i = strs[0].length - 1; i >= 0; i--) {
//     console.log(strs[0][i]);
//     }
// let reverseWord = strs[0].split('').reverse().join('');
// for (let i = 0; i < reverseWord.length; i++) {
//     console.log(reverseWord[i]);
//     }
// // Iterate through elements of the array from the second element to the last
// for (let i = 1; i < strs.length; i++) {
//     console.log(strs[i]);
//     }
// Iterate through all letters of all elements of the array
for (let i = 0; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
        console.log(strs[i][j]);
    }
}
// What are the 7 primitive data types and give an example of each
// Boolean: true or false
// Null: null
// Undefined: undefined
// Number: 1
// BigInt: 1n
// String: 'hello'
// Symbol: Symbol('foo')
// What are the 3 non-primitive types and give an example of each
// Object: {name: 'John', age: 30}
// Array: [1, 2, 3]
// Function: function add(a, b) {return a + b}
