// 136. Single Number

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:
// Input: nums = [2,2,1]
// Output: 1

// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4

/**
 * @param {number[]} nums
 * @return {number}
 */

var singleNumber = function(nums) {

  let bitSum = nums[0]; // O(1) space
  for (let i = 1; i < nums.length; i++) { // O(N) time
    // same numbers cancel out
    bitSum = bitSum ^ nums[i];
  }
  return bitSum;
};