/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 1. A stack to keep track of opening brackets
    const stack = [];
    
    // 2. Map for matching closing brackets to their opening counterparts
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let char of s) {
        // 3. If it's a closing bracket
        if (bracketMap[char]) {
            // Pop the top element from the stack; if stack is empty, use a dummy value
            const topElement = stack.length === 0 ? '#' : stack.pop();
            
            // If the popped element doesn't match the required opening bracket, it's invalid
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // 4. If it's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }

    // 5. If the stack is empty, all brackets were matched correctly
    return stack.length === 0;
};
