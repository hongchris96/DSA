// Return number of pairs of songs that adds up to the time of whole minutes
// [10, 50, 90, 30] -> 2
    // 10 + 50 = 60; 90 + 30 = 120;

function playlist(songs) {
  // Brute Force need time optimization
  // let total = 0;
  // for (let i = 0; i < songs.length - 1; i++) {
  //     let firstNum = songs[i];
  //     for (let j = i + 1; j < songs.length; j++) {
  //         if ((firstNum + songs[j]) % 60 === 0) {
  //             total += 1;
  //         }
  //     }
  // }
  // return total;
  // ----------------------------------------------------------------------
  // Using sort by remainder 
  let total = 0;
  let remainders = {};
  for (let i = 0; i < songs.length; i++) {
    let currentNum = songs[i];
    let remainder = currentNum % 60;
    let counterRemainder = 60 - remainder;
    if (!remainders[remainder]) {
      remainders[remainder] = [currentNum];
    } else {
      if (counterRemainder === remainder || remainder === 0) {
        // when the remainder is 0 (60, 120...) or same as counterRemainder (30, 30)
        // Add possible combination at this moment before adding currentNum to the storage
        total += remainders[remainder].length;
      }
      remainders[remainder].push(currentNum);
    }

    // Add combination of currentNum with all of its counterparts at this moment
    if (remainders[counterRemainder] && counterRemainder != remainder) {
      total += remainders[counterRemainder].length;
    }
  }
  return total;

}
