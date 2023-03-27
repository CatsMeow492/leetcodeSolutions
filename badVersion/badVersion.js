/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function(n) {

      let recursionHelper = function(start, end) {
          if (start > end) {
              return start; // base case: search interval is empty
          }
          let middle = Math.floor((start + end) / 2);
          if (isBadVersion(middle)){
              return recursionHelper(start, middle - 1) // i -- 
          } else {
              return recursionHelper(middle + 1, end) // i ++
          }
          
      }
      return recursionHelper(1, n);
  };
};