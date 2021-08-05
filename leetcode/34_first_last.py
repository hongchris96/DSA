# 34. Find First and Last Position of Element in Sorted Array

# Given an array of integers nums sorted in ascending order, find
# the starting and ending position of a given target value.
# If target is not found in the array, return [-1, -1].
# You must write an algorithm with O(log n) runtime complexity.

# Example 1:
# Input: nums = [5,7,7,8,8,10], target = 8
# Output: [3,4]

# Example 2:
# Input: nums = [5,7,7,8,8,10], target = 6
# Output: [-1,-1]

class Solution:
    def searchRange(self, nums, target):
        answer = [-1, -1]
        # binary search the target
        firstIdx = self.bsearch(0, len(nums)-1, nums, target)
        # if target is found, iterate left and right to get first and last pos
        if firstIdx != -1:
            answer = []
            leftIdx = firstIdx - 1
            rightIdx = firstIdx + 1
            while leftIdx >= 0:
                if nums[leftIdx] != nums[firstIdx]:
                    break
                leftIdx -= 1
            while rightIdx < len(nums):
                if nums[rightIdx] != nums[firstIdx]:
                    break
                rightIdx += 1
            answer.append(leftIdx + 1)
            answer.append(rightIdx - 1)
        return answer

    def bsearch(self, start, tail, nums, target):
        if start > tail:
            return -1
        mid = (tail + start) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] > target:
            return self.bsearch(start, mid-1, nums, target)
        else:
            return self.bsearch(mid+1, tail, nums, target)


thing = Solution()
print(Solution.searchRange(thing, [5, 7, 7, 8, 8, 10], 8))
