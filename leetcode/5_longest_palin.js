

var longestPalindrome = function(s) {
  // iterate through each element then expand left and right to check palindrome
  let lengthAndWord = [1, s[0]];
  for (let i = 1; i < s.length; i++) {
      // left and right neighbor are the same
      if (s[i-1] === s[i+1]) {
          expansion(i-1, i+1, s, lengthAndWord);
      }
      // left and iteself 
      if (s[i-1] === s[i]) {
          expansion(i-1, i, s, lengthAndWord);
      // right and itself
      }
      if (s[i+1] === s[i]) {
          expansion(i, i+1, s, lengthAndWord);
      // nothing the same
      }
  }
  return lengthAndWord[1];
};

var expansion = function(i1, i2, s, answer) {
  while (s[i1] === s[i2] && i1 >= 0 && i2 < s.length) {
    i1 -= 1;
    i2 += 1;
  }
  let leng = i2 - i1 - 1;
  let word = s.slice(i1+1, i2);
  if (leng > answer[0]) {
    answer[0] = leng;
    answer[1] = word;
  }
  return;
};

console.log(longestPalindrome('babad'));
console.log(longestPalindrome("bb"));
