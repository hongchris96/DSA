// 33. Search in Rotated Sorted Array

// There is an integer array nums sorted in ascending order (with distinct values).
// Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
// Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4

// Example 2:
// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

// Example 3:
// Input: nums = [1], target = 0
// Output: -1


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// Find largest value (pivot), do binary search on whole segment, first segment, last segment
var search = function(nums, target) {
  let largestValIdx = findPiv(nums, 0, nums.length - 1);

  if (target === nums[largestValIdx]) return largestValIdx;
  
  // when there's no pivot or rotation, do normal binary search
  if (largestValIdx === -1) {
      return binarySearch(nums, 0, nums.length - 1, target);
  // when target greater than first, do binary search up to largestValIdx
  } else if (target >= nums[0]) {
      return binarySearch(nums, 0, largestValIdx, target);
  // when target smaller than first, do binary search of range after largestValIdx
  } else {
      return binarySearch(nums, largestValIdx + 1, nums.length - 1, target);
  }
};

var findPiv = function(nums, head, tail) {
  if (tail < head || nums[0] < nums[nums.length - 1])
      return -1;
  if (tail == head)
      return head;

  let mid = Math.floor((head + tail) / 2);
  // [2,3,4,0,1] mid is in range and mid ele is greater than next ele
  if (mid < tail && nums[mid] > nums[mid + 1])
      return mid;
  
  // [3,4,0,1,2] mid is in range and mid ele is less than prev ele
  if (mid > head && nums[mid] < nums[mid - 1])
      return (mid - 1);
  
  // [4,0,1,2,3] when highest is at the head
  if (nums[head] >= nums[mid])
      // set new tail [4,0]
      return findPiv(nums, head, mid - 1);
  
  // [1,2,3,4,0] all else set new head [4,0]
  // [0,1,2,3,4] => [3,4] => [4]
  return findPiv(nums, mid + 1, tail);
}

var binarySearch = function(nums, head, tail, target) {
  if (tail < head) return -1;
  
  let mid = Math.floor((head + tail) / 2);
  if (nums[mid] === target) {
      return mid;
  } else if (nums[mid] > target) {
      return binarySearch(nums, head, mid - 1, target);
  } else {
      return binarySearch(nums, mid + 1, tail, target);
  }
}