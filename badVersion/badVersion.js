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

// Iterative solution
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
        let start = 1;
        let end = n;

        while (start < end) {
            let middle = Math.floor(start + (end - start) / 2);

            if (isBadVersion(middle)) {
                end = middle; // If middle version is bad, search the left half
            } else {
                start = middle + 1; // If middle version is not bad, search the right half
            }
        }

        return start; // When the loop ends, start points to the first bad version
    };
};
