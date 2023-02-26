# leetcodeSolutions

Pretty simple, just the solutions to the leetcode problems I do daily.

# Approach

I've started describing my conceptual approached in .md files before I actually attempt the code. I also add notes to these .md's if I'm later able to find faster solutions. These notes contain information on the algorithms used and their time complexities.

# Leetcode Problem File Generator

This module is a command-line tool that can generate Markdown and JavaScript files for LeetCode problems. For each problem, it creates a directory with the problem name and generates a problemName.md file and a problemName.js file with the required content.

Installation
To install the module, run the following command:

`npm install -g leetcode-problem-file-generator`

This will install the module globally on your system.

# Usage

To use the module, run the following command in your terminal:

`generate-leetcode-files [problem name]`

Replace [problem name] with the name of the LeetCode problem you want to generate files for. For example, to generate files for the "Two Sum" problem, run the following command:

`generate-leetcode-files "Two Sum"`

This will create a directory called two-sum (with hyphens instead of spaces) and generate the two-sum.md and two-sum.js files in that directory.

The md file will have the required content:

```
# Problem
# Intuition
# Approach
# Psuedocode
# Notes on Solution
# Algorithm
```

The js file will have an empty function with the name of the problem:

```
/**
 * @param {*} input
 * @returns
 */
function twoSum(input) {
  // Your code here
}
```

You can customize the content of the files by modifying the mdContent and jsContent variables in the module's code.

# Contributing

If you'd like to contribute to the module, feel free to open an issue or pull request on the module's GitHub repository.