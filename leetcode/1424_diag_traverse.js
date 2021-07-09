// 1424. Diagonal Traverse II

// Given a list of lists of integers, nums, return all elements of nums in diagonal order as shown in the below images.

// Example 1:
// Input: nums = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,4,2,7,5,3,8,6,9]

var findDiagonalOrder = function(nums) {
  // beginning always the first of each row
  // iterate through every element
  // a map: key: [ele1, ele2] .unshift
  // key: row + column
  // 4 = [1][0], 2 = [0][1] = row + col = 1
  // 7 = [2][0], 5 = [1][1], 3 = [0][2], row + col = 2
  // 8 = [2][1], 6 = [1][2]
  
  // for let key in map
  // shift the element out to a final array
  
  // number of total elements
  
  let diagonals = {}; // Space complexity is O(N)
  let finalAnswer = [];
  for (let row = 0; row < nums.length; row++) { // Time complexity is O(N)
      for (let col = 0; col < nums[row].length; col++) {
          let key = row + col;
          if (!diagonals[key]) {
              diagonals[key] = [];
          }
          diagonals[key].unshift(nums[row][col]);
      }
  }
  
  for (let key in diagonals) {
      while (diagonals[key].length) {
          finalAnswer.push(diagonals[key].shift());
      }
  }
  
  return finalAnswer;
};