function longestPalindrome(s) {
    const charCountMap = new Map();
    let maxPalindromeLength = 0;
    let hasSingleChar = false;
    
    for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);
      if (charCountMap.has(char)) {
        charCountMap.set(char, charCountMap.get(char) + 1);
      } else {
        charCountMap.set(char, 1);
      }
    }
    
    for (let count of charCountMap.values()) {
      if (count % 2 === 0) {
        maxPalindromeLength += count;
      } else {
        maxPalindromeLength += count - 1;
        hasSingleChar = true;
      }
    }
    
    if (hasSingleChar) {
      maxPalindromeLength += 1;
    }
    
    return maxPalindromeLength;
  }