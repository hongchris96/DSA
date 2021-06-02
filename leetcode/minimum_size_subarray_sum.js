// 209. Minimum Size Subarray Sum
// Medium

// Given an array of positive integers nums and a positive integer target, return the minimal length of a contiguous subarray [numsl, numsl+1, ..., numsr-1, numsr] of which the sum is greater than or equal to target. If there is no such subarray, return 0 instead.

// Example 1:
// Input: target = 7, nums = [2,3,1,2,4,3]
// Output: 2
// Explanation: The subarray [4,3] has the minimal length under the problem constraint.

// Example 2:
// Input: target = 4, nums = [1,4,4]
// Output: 1

// Example 3:
// Input: target = 11, nums = [1,1,1,1,1,1,1,1]
// Output: 0
 
// Constraints:
// 1 <= target <= 109
// 1 <= nums.length <= 105
// 1 <= nums[i] <= 105


// Brute force

var minSubArrayLen = function(target, nums) {
    let minLength = nums.length + 1;
    let currentSum = 0;
    let currentLength = 1;
    
    for (let i = 0; i < nums.length; i++) {
        console.log('minLength is');
        console.log(minLength);
        console.log('i is');
        console.log(i);
        if (nums[i] >= target) return 1;
        currentSum += nums[i]
        for (let j = i + 1; j < nums.length || j < i + minLength; j++) {
            currentSum += nums[j];
            currentLength += 1;
            if (currentSum >= target) {
                break;
            }
        }
        if (currentLength < minLength) {
            minLength = currentLength;
        }
        currentLength = 1;
        currentSum = 0;
        
    }
    return (minLength === nums.length + 1 ? 0 : minLength);
};


// Binary search Solution
// https://leetcode.com/problems/minimum-size-subarray-sum/solution/



console.log(minSubArrayLen(11, [1,1,1,1,1,1,1]));