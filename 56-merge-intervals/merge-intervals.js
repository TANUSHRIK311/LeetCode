/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) return intervals;
    
    // Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    
    const result = [];
    let current = intervals[0];
    
    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];
        
        // If overlap
        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap, push current and reset
            result.push(current);
            current = next;
        }
    }
    
    // Push last interval
    result.push(current);
    return result;
};