/**
 * @param {*} input
 * @returns
 */
function isSubsequence(s, t) {
  if (s.length == 0) {
    return true;
  }
  if (t.length == 0 || s.length > t.length) {
    return false;
  }
  let i = 0,
    j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] == t[j]) {
      i++;
    }
    j++;
  }
  return i == s.length;
}
