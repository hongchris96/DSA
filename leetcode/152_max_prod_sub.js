// 152. Maximum Product Subarray

// Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.
// It is guaranteed that the answer will fit in a 32-bit integer.
// A subarray is a contiguous subsequence of the array.

// Example 1:
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxProduct = function(nums) {
    
  // Brute force
  
  // let globalMax = -Infinity;
  // for (let i = 0; i < nums.length; i++) {
  //     let currentMax = nums[i];
  //     for (let j = i + 1; j < nums.length; j++) {
  //         globalMax = Math.max(globalMax, currentMax);
  //         currentMax *= nums[j];
  //     }
  //     globalMax = Math.max(globalMax, currentMax);
  // }
  // return globalMax;
  
  // Answer
  
  if(!nums || nums.length === 0) {
      return 0;
  }
  let result = nums[0], max = nums[0], min = nums[0];
  for(let i = 1; i < nums.length; i++) {
      const temp = max;
      // update max and min of all three conditions:
      // itself
      // max accumulation so far times itself
      // min accumulation so far times itself (negative times negative)
      max = Math.max(nums[i], max * nums[i], min * nums[i]);
      min = Math.min(nums[i], temp * nums[i], min * nums[i]);
      result = Math.max(result, max, min);
  }
  return result;
};