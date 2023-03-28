/**
 * @param {*} input
 * @returns
 */
function pivotIndex(input) {
  let leftSum = 0;
  let sum = input.reduce((a, b) => a + b, 0);
  for (let i = 0; i < input.length; i++) {
    if (leftSum === sum - leftSum - input[i]) {
      return i;
    }
    leftSum += input[i];
  }
  return -1;
}