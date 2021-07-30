// 394. Decode String

// Given an encoded string, return its decoded string.
// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.
// You may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there won't be input like 3a or 2[4].

// Example 1:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"

// Example 2:
// Input: s = "3[a2[c]]"
// Output: "accaccacc"

// Example 3:
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

/**
 * @param {string} s
 * @return {string}
 */


var decodeString = function(s) { //"3[a]2[bc]"
  let multiplier;
  let bracketStats = 0;
  let i = 0;
  let answer = "";
  while (i < s.length) {
      multiplier = 1;
      // obtain number
      if (parseInt(s[i]).toString() === s[i]) {
          let j = i + 1;
          while (s[j] !== "[") {
              j += 1;
          }
          multiplier = parseInt(s.slice(i, j));
          i = j;
          bracketStats += 1;
          
          // obtain string to be multiplied
          j = i;
          while (bracketStats !== 0) {
              j += 1
              if (s[j] === "[") bracketStats += 1;
              else if (s[j] === "]") bracketStats -= 1;
          }
          
          // recursive call on obtained string
          answer += multiplying(decodeString(s.slice(i+1, j)), multiplier);
          i = j + 1;
      } else {
          answer += s[i];
          i += 1;
      }
  }
  return answer;
};

var multiplying = function(s, num) {
  let newString = "";
  while(num > 0) {
      newString += s;
      num -= 1;
  }
  return newString;
}