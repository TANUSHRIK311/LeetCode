var divide = function(dividend, divisor) {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // Overflow case
    if (dividend === INT_MIN && divisor === -1) {
        return INT_MAX;
    }

    // Determine sign
    const negative = (dividend < 0) !== (divisor < 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let result = 0;

    while (dividend >= divisor) {
        let temp = divisor;
        let multiple = 1;

        // Safe doubling using addition
        while (dividend >= temp + temp) {
            temp += temp;
            multiple += multiple;
        }

        dividend -= temp;
        result += multiple;
    }

    return negative ? -result : result;
};
