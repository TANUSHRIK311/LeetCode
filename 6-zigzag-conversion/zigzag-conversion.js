/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    // If numRows is 1 or the string length is less than or equal to numRows,
    // the zigzag pattern is the same as the original string.
    if (numRows === 1 || s.length <= numRows) {
        return s;
    }

    // Create an array of strings, one for each row.
    // Initialize each entry with an empty string.
    const rows = new Array(numRows).fill('');
    let currentRow = 0;
    let goingDown = false;

    // Iterate through each character of the input string.
    for (let char of s) {
        // Add the current character to the current row.
        rows[currentRow] += char;

        // If we are at the top or bottom row, reverse the direction.
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row based on the current direction.
        if (goingDown) {
            currentRow++;
        } else {
            currentRow--;
        }
    }

    // Join all the rows together to form the final string.
    return rows.join('');
};

// Example Usage:
const s1 = "PAYPALISHIRING";
const numRows1 = 3;
console.log(`Input: "${s1}", Rows: ${numRows1}`);
console.log(`Output: "${convert(s1, numRows1)}"`); // Output: "PAHNAPLSIIGYIR"

const s2 = "PAYPALISHIRING";
const numRows2 = 4;
console.log(`Input: "${s2}", Rows: ${numRows2}`);
console.log(`Output: "${convert(s2, numRows2)}"`); // Output: "PINALSIGYAHRPI"

const s3 = "A";
const numRows3 = 1;
console.log(`Input: "${s3}", Rows: ${numRows3}`);
console.log(`Output: "${convert(s3, numRows3)}"`); // Output: "A"
