let strs = ["flower","flow","flight"];
var longestCommonPrefix = function(strs) {
    if (!strs.length) {
       return '';
    }
    let prefix = strs[0];
for (let i = 0; i < strs[0].length; i++){
    for (let j = 1; j < strs.length; j++) {
        if (strs[j][i] !== strs[0][i]) {
            prefix = prefix.slice(0, i);
        }
    }

}
        return prefix;
};

longestCommonPrefix(strs)