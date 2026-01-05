function longestPalindrome(s) {
    if (s.length < 2) {
        return s;
    }

    let start = 0;
    let maxLength = 1;

    // Helper function to expand from a center
    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            // If current palindrome is longer than max found so far
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
                start = left;
            }
            left--;
            right++;
        }
    }

    for (let i = 0; i < s.length; i++) {
        // Odd length palindromes (center is s[i])
        expandAroundCenter(i, i);

        // Even length palindromes (center between s[i] and s[i+1])
        expandAroundCenter(i, i + 1);
    }

    return s.substring(start, start + maxLength);
}

// Example Usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba" (depending on iteration)
console.log(longestPalindrome("cbbd"));  // Output: "bb"
console.log(longestPalindrome("a"));     // Output: "a"
console.log(longestPalindrome("racecar")); // Output: "racecar"
