// Number of moves to make all elements equal in array
// Each move increments 4 out of 5 elements in the array by 1

// Run Time failed for large input
function countMoves(numbers) {
  // Write your code here
  let maxNum = Math.max(...numbers);
  let moves = 0;
  while(!numbers.every(ele => ele === maxNum)) {
      let maxEncountered = false;
      for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] !== maxNum || maxEncountered) {
              numbers[i] += 1;
          } else {
              maxEncountered = true;
          }
      }
      moves += 1;
      maxNum = Math.max(...numbers);
  }
  return moves;
}