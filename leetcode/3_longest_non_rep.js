// 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // key of character, value of lastest index
  let charLastPositions = {};
  // max length of substring
  let answer = 0;
  // two pointers
  let start = 0;
  let tail = start;
  while (tail < s.length) {
      if (charLastPositions[s[tail]] === undefined) {
        // store tail index if the element is not visited
        charLastPositions[s[tail]] = tail;
      } else {
        // when hitting a visited, update start pointer
        // set start pointer to one after the index of the last time this value was encountered
        start = Math.max(start, charLastPositions[s[tail]] + 1); // in case of "abba", if last encounter location is before the start pointer, keep the start pointer
        // update tail index
        charLastPositions[s[tail]] = tail;
      }
      // update max length of non-repeating substring 
      answer = Math.max(answer, tail + 1 - start);
      // move tail pointer
      tail += 1;
  }
  return answer;
};