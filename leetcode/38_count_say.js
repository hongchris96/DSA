// 38. Count and Say

// The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
// countAndSay(1) = "1"
// countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
// To determine how you "say" a digit string, split it into the minimal number of groups so that each group is a contiguous section all of the same character. Then for each group, say the number of characters, then say the character. To convert the saying into a digit string, replace the counts with a number and concatenate every saying.
// For example, the saying and conversion for digit string "3322251":
// Given a positive integer n, return the nth term of the count-and-say sequence.

// Example 1:
// Input: n = 1
// Output: "1"
// Explanation: This is the base case.

var countAndSay = function(n) {
  if (n === 1) {
      return '1';
  }
  
  let prevLevel = countAndSay(n-1);
  // take the previous level and perform count of numbers
  // store the counts and numbers into new string
  let newString = '';
  let counter = 0;
  let currentEle;
  for (let i = 0; i < prevLevel.length; i++) {
      if (i === 0) {
          currentEle = prevLevel[i];
          counter += 1;
      } else if (prevLevel[i] === currentEle) {
          counter += 1;
      } else {
          newString += counter + currentEle;
          currentEle = prevLevel[i];
          counter = 1;
      }
      
      if (i === prevLevel.length - 1) {
          newString += counter + currentEle;
      }
  }
  return newString;
};