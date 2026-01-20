
//BRUTE FORCE
//----------------------------------------------------------------------------

var isValidBruteForce = function(s) {
    let previousLength = -1;

    // Keep loop running as long as the string length is changing
    while (s.length !== previousLength) {
        previousLength = s.length;
        
        // Remove one instance of each pair
        s = s.replace('()', '')
             .replace('[]', '')
             .replace('{}', '');
    }

    // If the string is empty, all pairs were matched and removed
    return s.length === 0;
};

// Example usage:
console.log(isValidBruteForce("()[]{}")); // true
console.log(isValidBruteForce("([{}])")); // true
console.log(isValidBruteForce("(]"));     // false

//----------------------------------------------------------------------------


//STACK METHOD
//----------------------------------------------------------------------------
function validParentheses(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };  
    for (let char of s) {
        if (map[char]) {
            stack.push(char);
        } else {
            const last = stack.pop();
            if (map[last] !== char) {
                return false;
            }
        }
    }
    return stack.length === 0;
}
console.log(validParentheses("()")); // Output: true
console.log(validParentheses("()[]{}")); // Output: true
console.log(validParentheses("(]")); // Output: false
console.log(validParentheses("([)]")); // Output: false
console.log(validParentheses("{[]}")); // Output: true

//----------------------------------------------------------------------------


var isValid = function(s) {
    let stack = [];
    
    for (let char of s) {
        if (char === '(') {
            stack.push(')');
        } else if (char === '{') {
            stack.push('}');
        } else if (char === '[') {
            stack.push(']');
        } else {
            // If the char is a closing bracket, it MUST match the popped element
            // If the stack is empty, stack.pop() returns undefined, which won't match
            if (stack.pop() !== char) {
                return false;
            }
        }
    }
    
    return stack.length === 0;
};
//----------------------------------------------------------------------------
