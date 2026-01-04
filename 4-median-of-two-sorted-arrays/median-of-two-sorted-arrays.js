/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Merge the two arrays
    const merged = nums1.concat(nums2);

    // Sort the merged array
    merged.sort((a, b) => a - b);

    const n = merged.length;
    
    // Check if the total number of elements is even or odd
    if (n % 2 === 0) {
        // If even, the median is the average of the two middle elements
        const midIndex2 = n / 2;
        const midIndex1 = midIndex2 - 1;
        return (merged[midIndex1] + merged[midIndex2]) / 2;
    } else {
        // If odd, the median is the middle element
        const midIndex = Math.floor(n / 2);
        return merged[midIndex];
    }
};

// Example Usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
