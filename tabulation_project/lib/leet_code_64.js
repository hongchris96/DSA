// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

// /*Input:*/ let grid = [[1,3,1],[1,5,1],[4,2,1]];
// Output: 7
// Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

function minPathSum(grid) {
    let height = grid.length;
    let width = grid[0].length;
    let cummTable = new Array(height).fill().map(() => new Array(width).fill(Infinity));
    // starting pos
    cummTable[0][0] = grid[0][0];
    for(let row = 0; row < height; row++) {
        for(let col = 0; col < width; col++) {
            if (col < width - 1) { // prevent col + 1 to be undefined
                cummTable[row][col + 1] = Math.min(cummTable[row][col] + grid[row][col + 1], cummTable[row][col + 1]);
            }
            if (row < height - 1) {
                cummTable[row + 1][col] = Math.min(cummTable[row][col] + grid[row + 1][col], cummTable[row + 1][col]);
            }
        }
    }

    return cummTable[height - 1][width - 1];
}

// console.log(minPathSum(grid));
