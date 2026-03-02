/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  // Build list of numbers 1 to n
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(i.toString());
  }
  
  // Precompute factorial values
  const fact = [1];
  for (let i = 1; i <= n; i++) {
    fact[i] = fact[i - 1] * i;
  }
  
  // Make k zero-indexed
  let target = k - 1;
  let result = "";
  
  // Build permutation
  for (let i = n; i >= 1; i--) {
    const idx = Math.floor(target / fact[i - 1]);
    result += nums[idx];         // pick number
    nums.splice(idx, 1);         // remove it
    target %= fact[i - 1];       // reduce k remainder
  }
  
  return result;
};