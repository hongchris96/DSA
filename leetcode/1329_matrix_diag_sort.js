// 1329. Sort the Matrix Diagonally

// A matrix diagonal is a diagonal line of cells starting from some cell in either the topmost row or leftmost column and going in the bottom-right direction until reaching the matrix's end. For example, the matrix diagonal starting from mat[2][0], where mat is a 6 x 3 matrix, includes cells mat[2][0], mat[3][1], and mat[4][2].
// Given an m x n matrix mat of integers, sort each matrix diagonal in ascending order and return the resulting matrix.

// Example 1:
// Input: mat = [[3,3,1,1],[2,2,1,2],[1,1,1,2]]
// Output: [[1,1,1,1],[1,2,2,2],[1,2,3,3]]

var diagonalSort = function(mat) {
  // // start from each element in top row
  // for (let i = 0; i < mat[0].length; i++) {
  //     // construct array from matrix diagonal
  //     let diagonalVal = [];
  //     let col = i;
  //     let row = 0;
  //     while (mat[row] && mat[row][col]) {
  //         diagonalVal.push(mat[row][col]);
  //         col += 1;
  //         row += 1;
  //     }
  //     // sort the array
  //     diagonalVal.sort((a,b) => a - b);
  //     // deconstruct sorted array into matrix
  //     col = i;
  //     row = 0;
  //     while (mat[row] && mat[row][col]) {
  //         mat[row][col] = diagonalVal[row];
  //         col += 1;
  //         row += 1;
  //     }
  // }
  
  // // start from each element in left column
  // for (let i = 1; i < mat.length; i++) {
  //     // construct array from matrix diagonal
  //     let diagonalVal = [];
  //     let col = 0;
  //     let row = i;
  //     while (mat[row] && mat[row][col]) {
  //         diagonalVal.push(mat[row][col]);
  //         col += 1;
  //         row += 1;
  //     }
  //     // sort the array
  //     console.log(diagonalVal);
  //     diagonalVal.sort((a,b) => a - b);
  //     // deconstruct sorted array into matrix
  //     col = 0;
  //     row = i;
  //     while (mat[row] && mat[row][col]) {
  //         mat[row][col] = diagonalVal[col];
  //         col += 1;
  //         row += 1;
  //     }
  // }
  // return mat;

  // ---------------------------------------------------------------------------------
  // Better solution: store each diagonal in a map

  let diagonalVals = {};
  // iterate through all elements adding elements to the corresponding diagonal array in map
  // constructing all diagonals
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      // the difference between row and col index is the same within a diagonal
      let diagonalKey = row - col;
      if (!diagonalVals[diagonalKey]) diagonalVals[diagonalKey] = [];
      diagonalVals[diagonalKey].push(mat[row][col]);
    }
  }
  // sort each diagonals
  for (let key in diagonalVals) {
    diagonalVals[key].sort((a,b) => a - b);
  }

  // deconstruct sorted diagonals into matrix
  for (let row = 0; row < mat.length; row++) {
    for (let col = 0; col < mat[0].length; col++) {
      // the difference between row and col index is the same within a diagonal
      let diagonalKey = row - col;
      mat[row][col] = diagonalVals[diagonalKey].shift();
    }
  }
  return mat;
};