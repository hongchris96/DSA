// Given a binary string consists of only 1 and 0
// return the number of substrings where it has equal amount of each type grouped together
// substring e.g. 0011, 1111100000, 01


// ERROR: runtime problem when scaled up
function getSubstringCount(s) {
  // Write your code here
  // iterate through elements double for loop
  // keep track of 0 count and 1 count
  // when n !== n-1 and 0 count === 1 count, answer += 1
  
  // let answer = 0;
  // for (let i = 0; i < s.length - 1; i++) {
  //     for (let j = i + 1; j < s.length; j++) {
  //         if (isEven(s.slice(i, j+1))) {
  //             console.log(s.slice(i, j+1));
  //             answer += 1;
  //         }
  //     }
  // }
  // return answer;

  // Improve runtime maybe?
  let answer = 0;
  let groups = [];
  let i = 1;
  let currentType = s[0];
  let currentGroupCount = 1;
  while ( i < s.length) {
    if (s[i] === currentType) {
      currentGroupCount += 1;
      if (i === s.length - 1) {
        groups.push(currentGroupCount);
      }
    } else {
      groups.push(currentGroupCount);
      currentType = s[i];
      currentGroupCount = 1;
    }
    i++;
  }
  for (let i = 0; i < groups.length - 1; i++) {
    if (groups[i] === groups[i+1]) {
      answer += groups[i];
    } else {
      answer += Math.min(groups[i+1], groups[i]);
    }
  }
  return answer;
}

// function isEven(s) {
//   if (s.length % 2) return false;
//   let splitIdx = [];
//   for (let i = 1; i < s.length; i++) {
//       if (s[i] !== s[i-1]) {
//           splitIdx.push(i);
//       }
//   }
//   if (!splitIdx.length || splitIdx.length > 1) return false;
//   return s.slice(0, splitIdx).length === s.slice(splitIdx).length;
// }

console.log(getSubstringCount("001100011")); // should return 6
