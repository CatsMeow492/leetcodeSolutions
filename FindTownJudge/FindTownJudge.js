/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  // Arrays to track the indegree and outdegree of each person
  const indegree = new Array(n + 1).fill(0);
  const outdegree = new Array(n + 1).fill(0);
  
  // Populate the indegree and outdegree arrays
  for (let [a, b] of trust) {
      outdegree[a]++;
      indegree[b]++;
  }
  
  // Find the judge by looking for a person with indegree of n-1 and outdegree of 0
  for (let i = 1; i <= n; i++) {
      if (indegree[i] === n - 1 && outdegree[i] === 0) {
          return i;
      }
  }
  
  // If no judge is found, return -1
  return -1;
};
