# Number of Moves

# Minimum moves to move Knight from one position to another, if can't return -1

from collections import defaultdict


def minMoves(n, startRow, startCol, endRow, endCol):
    # Write your code here
    dirs = ((1, 2), (2, 1), (2, -1), (1, -2),
            (-1, 2), (-2, 1), (-2, -1), (-1, -2))
    minMovesRoutes = defaultdict(int)

    def DFS(n, startRow, startCol, endRow, endCol):
        if startRow == endRow and startCol == endCol:
            return 0
        routeKey = str(startRow) + str(startCol) + str(endRow) + str(endRow)
        minMovesRoutes[routeKey] += 1
        for (dRow, dCol) in dirs:
            nextStartRow = startRow + dRow
            nextStartCol = startCol + dCol
            if (
                nextStartRow >= 0
                and nextStartRow < n
                and nextStartCol >= 0
                and nextStartCol < n
            ):
                DFS(n, nextStartRow, nextStartCol, endRow, endCol)
            else:
                return -1


print(minMoves(9, 4, 4, 4, 8))  # 2
