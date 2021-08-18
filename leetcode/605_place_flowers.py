# 605. Can Place Flowers

# You have a long flowerbed in which some of the plots are planted, and some
# are not. However, flowers cannot be planted in adjacent plots.
# Given an integer array flowerbed containing 0's and 1's, where 0 means empty
# and 1 means not empty, and an integer n, return if n new flowers can be
# planted in the flowerbed without violating the no-adjacent-flowers rule.

# Example 1:
# Input: flowerbed = [1,0,0,0,1], n = 1
# Output: true

# Example 2:
# Input: flowerbed = [1,0,0,0,1], n = 2
# Output: false


class Solution:
    def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
        planted = 0
        i = 0
        while i < len(flowerbed) and planted < n:
            if flowerbed[i] == 1:
                i += 2
            elif flowerbed[i] == 0:
                if len(flowerbed) == 1:
                    planted += 1
                    i += 1
                elif (
                        i == 0 and flowerbed[i+1] != 1 or
                        i == len(flowerbed) - 1 and flowerbed[i-1] != 1 or
                        flowerbed[i+1] != 1 and flowerbed[i-1] != 1
                     ):
                    flowerbed[i] = 1
                    planted += 1
                    i += 1
                i += 1
        return planted == n
