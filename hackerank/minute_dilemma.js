// Return number of pairs of songs that adds up to the time of whole minutes
// [10, 50, 90, 30] -> 2
    // 10 + 50 = 60; 90 + 30 = 120;

// need time optimization
function playlist(songs) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < songs.length - 1; i++) {
      let firstNum = songs[i];
      for (let j = i + 1; j < songs.length; j++) {
          if ((firstNum + songs[j]) % 60 === 0) {
              total += 1;
          }
      }
  }
  return total;
}

