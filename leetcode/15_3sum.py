# 15. 3Sum

# Given an integer array nums, return all the triplets
# [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k,
# and nums[i] + nums[j] + nums[k] == 0.
# Notice that the solution set must not contain duplicate triplets.

# Example 1:
# Input: nums = [-1,0,1,2,-1,-4]
# Output: [[-1,-1,2],[-1,0,1]]

# Example 2:
# Input: nums = []
# Output: []

# Example 3:
# Input: nums = [0]
# Output: []


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # sort smallest to largest first
        nums.sort()
        print(nums)
        length = len(nums)
        result = []
        for i in range(length):
            # avoid repetition?
            if i > 0 and nums[i] == nums[i-1]:
                continue
            # after getting the first number
            # want sum of second and third to be opposite of first
            target = nums[i]*-1
            start = i+1
            end = length-1
            # iterate from out to in
            while start < end:
                # if found the second and third
                if nums[start] + nums[end] == target:
                    result.append([nums[i], nums[start], nums[end]])
                    start += 1
                    # inc idx for second until it's a new second
                    while start < end and nums[start] == nums[start-1]:
                        start += 1
                # if sum is less than opposite of first
                elif nums[start] + nums[end] < target:
                    # inc idx for second
                    start += 1
                # if sum is greater than opposite
                else:
                    # dec idx for third
                    end -= 1
        return result
