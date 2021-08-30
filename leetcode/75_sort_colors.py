# 75. Sort Colors

# Given an array nums with n objects colored red, white, or blue, sort them
# in-place so that objects of the same color are adjacent, with the colors
# in the order red, white, and blue.
# We will use the integers 0, 1, and 2 to represent the color red, white,
# and blue, respectively.
# You must solve this problem without using the library's sort function.

# Example 1:
# Input: nums = [2,0,2,1,1,0]
# Output: [0,0,1,1,2,2]

# Example 2:
# Input: nums = [2,0,1]
# Output: [0,1,2]


class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        # counting sort

        eachAmount = [0, 0, 0]
        for num in nums:
            eachAmount[num] += 1

        pointer = 0
        for i in range(len(nums)):
            while eachAmount[pointer] == 0:
                pointer += 1
            nums[i] = pointer
            eachAmount[pointer] -= 1

        # --------------
        # insertion sort

        # for i in range(1, len(nums)):
        #     j = i
        #     while nums[j] < nums[j-1] and j > 0:
        #         nums[j], nums[j-1] = nums[j-1], nums[j]
        #         j -= 1