// Return the index of the first unique character in a string
// 1-based index
// e.g "hackthegame" -> 3; c is the first unique character

function getUniqueCharacter(s) {
  // Write your code here
  let checkedLetters = new Set();
  for (let i = 0; i < s.length - 1; i++) {
      let target = s[i];
      if (!checkedLetters.has(target)) {
          let rest = s.slice(i+1).split("").sort();
          if (!bs(rest, target)) {
              return i + 1;
          }
          checkedLetters.add(target);
      }
  }
  return -1;
}

function bs(arr, target) {
  if (arr.length === 0) return false;
  let midIdx = Math.floor(arr.length / 2);
  if (arr[midIdx] === target) {
      return true;
  } else if (arr[midIdx] > target) {
      return bs(arr.slice(0, midIdx), target);
  } else {
      return bs(arr.slice(midIdx+1), target);
  }
}