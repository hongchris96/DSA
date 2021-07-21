// On a map, O is the officer, T is the target, X is a wall, _ is open path
// Return the minimal steps from officer to target

/*
 * Complete the 'calculateDistance' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING cityMap as parameter.
 */

function calculateDistance(cityMap) {
    // Write your code here
    // Turn string into 2D array
    let mapArray = cityMap.split(";").map(ele => ele.split(""));
    // initialize number of moves matrix
    let movesMatrix = new Array(mapArray.length).fill();
    // Get coordinates of officer and target
    let officerLoc;
    let targetLoc;
    for (let i = 0; i < mapArray.length; i++) {
        // building moves Matrix filled with Infinity values
        movesMatrix[i] = new Array(mapArray[i].length).fill(Infinity);
        for (let j = 0; j < mapArray[i].length; j++) {
            let locVal = mapArray[i][j];
            if (locVal === "O") {
                officerLoc = [i, j];
            } else if (locVal === "T") {
                targetLoc = [i, j];
            }
        }
    }
    // recursively search routes
    traverse(officerLoc[0], officerLoc[1], targetLoc[0], targetLoc[1], 0, null, movesMatrix, mapArray);
    return movesMatrix[targetLoc[0]][targetLoc[1]];
}

// officer row and col position, steps 0, incoming direction, moves map, city map, storage object
function traverse(row, col, targetRow, targetCol, steps, lastDir, movesMap, cityMap) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    if (lastDir !== null) {
        // remove the direction where last stack came from
        let removeDir = lastDir.map(ele => {
            if (ele) {
                return 0 - ele;
            } else {
                return ele;
            }
        });
        directions = directions.filter(ele => {
            return ele[0] !== removeDir[0] || ele[1] !== removeDir[1];
        });
    }
    movesMap[row][col] = Math.min(movesMap[row][col], steps);
    if (row === targetRow && col === targetCol) {
        return;
    }
    for (let i = 0; i < directions.length; i++) {
        let nextRow = row + directions[i][0];
        let nextCol = col + directions[i][1];
        // if the next location is in range and not X, proceed recursion of next location
        if (nextRow < cityMap.length && nextRow >= 0
            && nextCol < cityMap[nextRow].length && nextCol >= 0
            && cityMap[nextRow][nextCol] !== "X"
        ) {
            traverse(nextRow, nextCol, targetRow, targetCol, steps + 1, directions[i], movesMap, cityMap);
        }
    }
}

console.log(calculateDistance("O__;_XT;___")); // 3
// O _ _
// _ X T
// _ _ _

console.log(calculateDistance("X__;_TX;_XO;___")); // 6
// X _ _
// _ T X
// _ X O
// _ _ _

console.log(calculateDistance("__O;___;_T_;___")); // 3 Failed!
// _ _ O
// _ _ _
// _ T _
// _ _ _
