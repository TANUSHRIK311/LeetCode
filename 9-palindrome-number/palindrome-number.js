function isPalindrome(x) {
    // 1. Handle negative numbers (e.g., -121 becomes 121-)
    if (x < 0) {
        return false;
    }

    // 2. Convert the number to a string
    const originalString = x.toString(); // e.g., 121 -> "121"

    // 3. Reverse the string
    const reversedString = originalString.split('').reverse().join(''); // "121" -> ['1','2','1'] -> ['1','2','1'] -> "121"

    // 4. Compare the original and reversed strings
    return originalString === reversedString; // "121" === "121" -> true
}

// Example Usage:
console.log(isPalindrome(121)); // Output: true
console.log(isPalindrome(-121)); // Output: false
console.log(isPalindrome(10)); // Output: false
console.log(isPalindrome(0)); // Output: true
console.log(isPalindrome(12321)); // Output: true
