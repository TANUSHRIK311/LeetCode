/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    // trim trailing spaces
    s = s.trim();
    
    // find last space
    let lastSpace = s.lastIndexOf(" ");
    
    // return length of last word
    return s.length - lastSpace - 1;
};