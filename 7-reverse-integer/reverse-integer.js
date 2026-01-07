/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -Math.pow(2, 31);      // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1;   // 2147483647
    let reversed = 0;

    while (x !== 0) {
        // Extract the last digit
        let pop = x % 10;
        
        // Update x by removing the last digit
        // Use Math.trunc to correctly handle negative truncation towards zero
        x = Math.trunc(x / 10);

        // Check for overflow before updating the reversed number
        // Max limit check: if reversed is already > INT_MAX / 10, adding another digit overflows
        if (reversed > INT_MAX / 10 || (reversed === INT_MAX / 10 && pop > 7)) {
            return 0;
        }
        // Min limit check: if reversed is already < INT_MIN / 10, adding another digit underflows
        if (reversed < INT_MIN / 10 || (reversed === INT_MIN / 10 && pop < -8)) {
            return 0;
        }

        reversed = reversed * 10 + pop;
    }

    return reversed;
};
