/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    // Initialize
    let currentMax = nums[0];
    let globalMax = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const num = nums[i];

        // Either start new subarray from num,
        // or extend the previous one
        currentMax = Math.max(num, currentMax + num);

        // Update global maximum
        globalMax = Math.max(globalMax, currentMax);
    }

    return globalMax;
};