// Rectangular Map of N x M, each tile has a shade (5 different shades total).
// A country:
    // Has tiles of the same shade
    // Can travel from one tile to another orthogonally (up down, left right) without another shade in the way
// How many countries are there?

// Test Case: 11 countries here
// [[5,4,4],
//  [4,3,4],
//  [3,2,4],
//  [2,2,2],
//  [3,3,4],
//  [1,4,4],
//  [4,1,1]]

//  🔴🔵🔵
//  🔵⚪🔵
//  ⚪✅🔵
//  ✅✅✅
//  ⚪⚪🔵
//  ⚫🔵🔵
//  🔵⚫⚫
// ------------------------------------------------------------------------------

function DFS(mapo, row, col, visited, countryNumber) {
    dirs = [[0, 1], [0, -1], [1, 0]]; // [row, col] right, left, down
    locKey = row + '-' + col; // store location as keys for visited Hash

    // if location value is undefined
    if (!visited[locKey]) {
        visited[locKey] = countryNumber; // assign the new country number
    } else {
        return; // else leave current stack / node
    }

    // looking at each child node
    for (let i = 0; i < dirs.length; i++) {
        let nextRow = row + dirs[i][0];
        let nextCol = col + dirs[i][1];
        // if next location is in range and never visited and same shade as current location
        if (nextRow < mapo.length
            && nextCol >= 0
            && nextCol < mapo[0].length
            && !visited[nextRow + '-' + nextCol]
            && mapo[nextRow][nextCol] === mapo[row][col]) {
            DFS(mapo, nextRow, nextCol, visited, countryNumber); // recursion of child node
        }
    }
    return visited;
}

// let matrix = [[5,4,4],[4,3,4],[3,2,4],[2,2,2],[3,3,4],[1,4,4],[4,1,1]];
// let record = {};
// console.log(DFS(matrix, 0, 0, record, 5));
// console.log(DFS(matrix, 0, 1, record, 4));
// console.log(DFS(matrix, 0, 2, record, 4));
// console.log(DFS(matrix, 2, 1, record, 2));
// console.log(record);

function solution(A) {
    let visitedSpots = {}; // visited Hash
    let countryNumber = 0; // act as countries count

    // Check each spot
    for (let row = 0; row < A.length; row++) {
        for (let col = 0; col < A[0].length; col++) {
            // if location never visited
            if (!(row + '-' + col in visitedSpots)) {
                countryNumber += 1
                DFS(A, row, col, visitedSpots, countryNumber);
            }
        }
    }

    // Take all unique values
    let uniqueCountries = new Set(Object.values(visitedSpots));
    return uniqueCountries.size;
}

console.log(solution([[5,4,4],[4,3,4],[3,2,4],[2,2,2],[3,3,4],[1,4,4],[4,1,1]]));