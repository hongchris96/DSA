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

// ------------------------------------------------------------------------------

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
//     let countries = {};

//     for (let row = 0; row < A.length; row++) {
//         for (let column = 0; column < A[0].length; column++) {
//             if (!(A[row][column] in countries)) {
//                 countries[A[row][column]] = new Array()
//             }
//             countries[A[row][column]].push([row, column]);
//         }
//     }
//     console.log(countries);
//     let amount = 0;
//     for (let key in countries) {
//         amount += 1;
//     }

//     return amount;
// }

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let countries = new Array();
    let row = 0;
    let column = 0;

    while (row !== A.length - 1 || column !== A[0].length - 1) {
        let currentCountry = [];
        let currentShade = A[row][column];
        while (column < A[0].length) {
            if (A[row][column] === currentShade && !currentCountry.includes([row, column])) {
                currentCountry.push([row, column]);
            } else {
                break;
            }
            while (row < A.length) {
                if (column !== A[0].length - 1) {
                    if (A[row][column + 1] === currentShade && !currentCountry.includes([row, column + 1])) {
                        currentCountry.push([row, column + 1]);
                    }
                }
                if (column !== 0) {
                    if (A[row][column - 1] === currentShade && !currentCountry.includes([row, column - 1])) {
                        currentCountry.push([row, column - 1]);
                    }
                }
                row += 1;
            }
            column += 1;
        }
        countries.push(currentCountry);
    }
    return countries.length;

}

console.log(solution([[5,4,4],[4,3,4],[3,2,4],[2,2,2],[3,3,4],[1,4,4],[4,1,1]]));