// 22. Generate Parentheses

// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// Example 1:
// Input: n = 3
// Output: ["((()))","(()())","(())()","()(())","()()()"]

// Example 2:
// Input: n = 1
// Output: ["()"]

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  // n is the limit
  // 0 opening paren count and 0 closing count
  // empty str for building possible strs
  // empty array to store all the final strs
  return rec_paren(n, 0, 0, "", []);
};

var rec_paren = function(n, open, close, str, arr) {
  // End of building this str
  // upon reaching the limit of closing parenthesis
  if (close === n) {
    // store this str
    arr.push(str);
  } else {
    // Still building possible str
    // Path towards early closing parenthesis, e.g. ()...
    // only when more opening paren than closing paren
    if (open > close) {
      let newStr = str + ")";
      rec_paren(n, open, close + 1, newStr, arr);
    }
    // Path towards adding opening parenthesis, e.g. ((...
    // only when opening paren is below the limit
    if (open < n) {
      let newStr2 = str + "(";
      rec_paren(n, open + 1, close, newStr2, arr);
    }
  }
  return arr;
}

console.log(generateParenthesis(3).sort().toString() === ["((()))","(()())","(())()","()(())","()()()"].sort().toString());
console.log(generateParenthesis(4).sort().toString() === ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"].sort().toString());