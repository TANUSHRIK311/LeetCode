/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
    // Initialize n x n matrix with zeros
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));
    
    let num = 1;
    let top = 0, bottom = n - 1;
    let left = 0, right = n - 1;
    
    while (top <= bottom && left <= right) {
        // Move right
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;
        
        // Move down
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;
        
        // Move left
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = num++;
            }
            bottom--;
        }
        
        // Move up
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = num++;
            }
            left++;
        }
    }
    
    return matrix;
};