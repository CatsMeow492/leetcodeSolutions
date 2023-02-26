const fs = require('fs');
const path = require('path');

// Replace spaces in the problem name with hyphens
const problemName = process.argv[2].replace(/\s/g, '-');

// Create the directory for the problem
fs.mkdirSync(problemName);

// Create the Markdown file with the required content
const mdContent = `# Problem
# Intuition
# Approach
# Psuedocode
# Notes on Solution
# Algorithm`;
fs.writeFileSync(path.join(problemName, `${problemName}.md`), mdContent);

// Create the JavaScript file with an empty function
const jsContent = `/**
 * @param {*} input
 * @returns
 */
function ${problemName}(input) {
  // Your code here
}`;
fs.writeFileSync(path.join(problemName, `${problemName}.js`), jsContent);

console.log(`Created files for problem "${problemName}" in directory "${problemName}"`);
