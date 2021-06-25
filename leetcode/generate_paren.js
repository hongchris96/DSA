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
  // ["(((())))","((()()))","((())())","((()))()","(()(()))","(()()())","(()())()","(())(())","(())()()","()((()))","()(()())","()(())()","()()(())","()()()()"]
  // missing '(())(())'
  // ["((()))","(()())","(())()","()(())","()()()"]
  // ["(())","()()"]
  // ["()"]
  if (n === 1) return ["()"];
  
  let smallerProblem = generateParenthesis(n-1);
  console.log(smallerProblem);
  let newLevel = [];
  smallerProblem.forEach(ele => {
      let newEle = "(" + ele + ")";
      newLevel.push(newEle);
  });
  smallerProblem.forEach(ele => {
      let newEle = "()" + ele;
      if (!newLevel.includes(newEle)) {
          newLevel.push(newEle);
      }
  });
  smallerProblem.forEach(ele => {
      let newEle = ele + "()";
      if (!newLevel.includes(newEle)) {
          newLevel.push(newEle);
      }
  });
  return newLevel;
};

