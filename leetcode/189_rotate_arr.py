# 189. Rotate Array

# Given an array, rotate the array to the right by k steps, where k is non-negative.

# Example 1:
# Input: nums = [1,2,3,4,5,6,7], k = 3
# Output: [5,6,7,1,2,3,4]
# Explanation:
# rotate 1 steps to the right: [7,1,2,3,4,5,6]
# rotate 2 steps to the right: [6,7,1,2,3,4,5]
# rotate 3 steps to the right: [5,6,7,1,2,3,4]

# Example 2:
# Input: nums = [-1,-100,3,99], k = 2
# Output: [3,99,-1,-100]
# Explanation: 
# rotate 1 steps to the right: [99,-1,-100,3]
# rotate 2 steps to the right: [3,99,-1,-100]


class Solution:
    def rotate(self, nums: List[int], k: int) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # in case of large k
        k = k % len(nums)
        # reverse the whole list
        self.partialReverse(nums, 0, len(nums) - 1)
        # reverse the first segment and then the second segment
        self.partialReverse(nums, 0, k - 1)
        self.partialReverse(nums, k, len(nums) - 1)

    def partialReverse(self, nums, head, tail):
        while head < tail:
            nums[head], nums[tail] = nums[tail], nums[head]
            head += 1
            tail -= 1
