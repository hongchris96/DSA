// Given an array of garbage weights ranging from 1.01 to 3 lbs.
// Janitor can only carry up to 3 lbs for one trip.
// Return the minimum trip he has to make.

function efficientJanitor(weight) {
  // Write your code here
  let answer = 0;
  let sortedWeight = weight.sort((a,b) => a - b);
  while (sortedWeight.length) {
      let largest = sortedWeight.pop();
      let accum = largest;
      while (accum + sortedWeight[0] <= 3) {
          accum += sortedWeight.shift();
      }
      answer += 1;
  }
  return answer;
}