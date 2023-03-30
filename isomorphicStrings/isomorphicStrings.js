/**
 * @param {*} input
 * @returns
 */
function isomorphicStrings(s, t) {
  let sMap = new Map();
  let tMap = new Map();
  for (let i = 0; i < s.length; i++){
      if (sMap.has(s[i]) || tMap.has(t[i])){
          if (sMap.get(s[i]) !== t[i] || tMap.get(t[i]) !== s[i]){
              return false;
          }
      } else {
          sMap.set(s[i], t[i]);
          tMap.set(t[i], s[i]);
      }
  }
  return true;
}
