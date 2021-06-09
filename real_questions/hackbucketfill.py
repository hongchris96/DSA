# HackerRank BucketFill

def strokesRequired(picture):
    # Write your code here
    rowLength = len(picture)
    columnLength = len(picture[0])
    strokes = 0
    visitedSpots = set()

    def DFS(position, parentLetter):
        visitedSpots.add(position)
        for (dRow, dCol) in ((-1, 0), (0, -1), (1, 0), (0, 1)):
            nextRow = position[0] + dRow
            nextCol = position[1] + dCol
            if (
                nextRow >= 0
                and nextRow < rowLength
                and nextCol >= 0 and
                nextCol < columnLength
            ):
                if (
                    picture[nextRow][nextCol] == parentLetter
                    and (nextRow, nextCol) not in visitedSpots
                ):
                    DFS((nextRow, nextCol), parentLetter)

    for row in range(rowLength):
        for col in range(columnLength):
            if (row, col) not in visitedSpots:
                strokes += 1
                DFS((row, col), picture[row][col])

    return strokes


print(strokesRequired(["aaaba", "ababa", "aaaca"]))  # 5 strokes
print(strokesRequired(["bbba", "abba", "acaa", "aaac"]))  # 4 strokes
print(strokesRequired(["aaabbbccbaaaacbbabbb",
                       "caaabaaaaaabbbbaaaaa",
                       "aaaaaabbbaacabaaaaab",
                       "caaaabaaaabbaabbaaab",
                       "ababbaaaaaabbbababba",
                       "aaaacbbabacbcaaaacac",
                       "abacbcbcabbbacaaabaa",
                       "bbbcabbbbacacabbbaba",
                       "babbabbaababcacccbbb",
                       "abbbaabcbbabbaabaaaa",
                       "babaacbbaabaabababab",
                       "aaabbaabaacbbbbababb",
                       "caabacabcbbcabacbaac",
                       "bbcbcaabbcbaabbababb",
                       "baabacaabbbaabbaabaa",
                       "cabbbaabbabaabaaaacb",
                       "aabbbcbabbbaaaaabbab",
                       "bbaaabacbbbabbabacac",
                       "baaacbaacbabcbbbabab",
                       "acabbbcabcbcabaacabc"]))  # 129 strokes
