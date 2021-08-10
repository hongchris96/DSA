# 6. ZigZag Conversion

# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
# of rows like this: (you may want to display this pattern in a fixed font for
# better legibility)

# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
# Write the code that will take a string and make this conversion given a
# number of rows:

# string convert(string s, int numRows);

# Example 1:
# Input: s = "PAYPALISHIRING", numRows = 3
# Output: "PAHNAPLSIIGYIR"

# Example 2:
# Input: s = "PAYPALISHIRING", numRows = 4
# Output: "PINALSIGYAHRPI"
# Explanation:
# P     I    N
# A   L S  I G
# Y A   H R
# P     I


class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if numRows == 1:
            return s

        rows = {r: [] for r in range(numRows)}
        currentRow = 0
        rowDir = True
        for letter in s:
            rows[currentRow].append(letter)
            if rowDir:
                currentRow += 1
            else:
                currentRow -= 1
            
            if currentRow == numRows - 1 or currentRow == 0:
                rowDir = not rowDir

        answer = ""
        for k, v in rows.items():
            while v:
                answer += v.pop(0)
        
        return answer
