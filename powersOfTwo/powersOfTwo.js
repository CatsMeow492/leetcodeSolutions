/**
 * @param {*} input
 * @returns
 */
function powersOfTwo(input) {
  if (n <= 0 ) {
    return false
  }
  return (n & (n - 1)) === 0
}