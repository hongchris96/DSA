# Scattering-Palindrome

# scattering palindrome is a string that can be rearranged into a palindrome
# How many substrings are scattering palindrome?
from collections import defaultdict


def scatterPalindrome(strToEvaluate):
    # Write your code here
    def isScatterPalindrome(word):
        if len(word) == 1:
            return True
        letterCount = defaultdict(int)
        for letter in word:
            letterCount[letter] += 1
        oddCountLetter = \
            [char for char in letterCount if letterCount[char] % 2 != 0]
        return len(oddCountLetter) <= 1

    scatPalCount = 0
    for start in range(len(strToEvaluate)):
        for ending in range(start+1, len(strToEvaluate)+1):
            if isScatterPalindrome(strToEvaluate[start:ending]):
                scatPalCount += 1
    return scatPalCount


print(scatterPalindrome('aabb'))  # 9
print(scatterPalindrome('abc'))  # 3
print(scatterPalindrome('bbrrg'))  # 12
