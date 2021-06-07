# "Degree of an Array"
# This is a sample question and not part of your interview.

# Given a non-empty array N, of non-negative integers , the degree of this
# array is defined as the maximum frequency of any one of its elements. Your
# task is to find the smallest possible length of a (contiguous) subarray of N,
# that has the same degree as N. For example, in the array [1 2 2 3 1], integer
# 2 occurs maximum of twice. Hence the degree is 2.

# Input

# Test case input contains 2 lines.
# First line contains an integer T, representing the number of elements
# in the array.
# The second line contains the array N, list of T integers each separated
# by space.

# Output

# Print the length of the smallest contiguous subarray of input array N, that
# has the same degree as N.
# Code evaluation is based on your output, please follow the sample format and
# do NOT print anything else.

# Sample:
# 5
# 1 2 2 3 1
# Output: 2

def codehere(arr):
    i = 0
    currentAnswer = max(arr) + 1
    while i < len(arr):
        repCount = 0
        startingNum = arr[i]
        # print('arr[i] is ', startingNum)
        # print('i is ', i)
        if arr[i] > 1:
            for j in range(startingNum):
                if i < len(arr) and arr[i] == startingNum:
                    repCount += 1
                    i += 1
                else:
                    break
            if repCount < currentAnswer and repCount != 1:
                currentAnswer = repCount
        else:
            i += 1
    if currentAnswer == max(arr) + 1:
        return None
    else:
        return currentAnswer


print(codehere([1, 2, 2, 3, 1]))
