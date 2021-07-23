// 17. Letter Combinations of a Phone Number

// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.
// A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

// Example 2:
// Input: digits = ""
// Output: []

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // buttons with key as number value as array of letters
  let buttons = {};
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  // starting at 2 building the buttons object
  let num = 2;
  for (let alph of alphabet) {
    if (!buttons[num]) buttons[num] = [];
    if (buttons[num].length < 3) buttons[num].push(alph);
    else if ((num === 7 || num === 9) && buttons[num].length < 4) buttons[num].push(alph);
    else {
      num += 1;
      buttons[num] = [alph];
    }
  }
  // obtaining all combinations from input string digits
  let answer = [];
  for (let dig of digits) {
    if (!answer.length) {
      // initial push of first digit
      for (let stuff of buttons[dig]) {
        answer.push(stuff)
      }
    } else {
      // for the second digit and up
      // setting the number of times of shift and push operation
      let preLength = answer.length;
      for (let count = 0; count < preLength; count++ ) {
        // take out the previously made element in the answer
        let head = answer.shift();
        // concat the current digit to the element and push it back to answer
        for (let stuff of buttons[dig]) {
          answer.push(head + stuff);
        }
      }
    }
  }
  return answer;
}
