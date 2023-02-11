/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
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
};

// Test case "egg" and "add" should return true
console.log(isIsomorphic("egg", "add"));
console.log(isIsomorphic("foo", "bar"));