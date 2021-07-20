function numPlayers(k, scores) {
  // Write your code here
  scores.sort((a,b) => b - a);
  let answer = k;
  if (scores[k-1]) {
      for (let i = k; i < scores.length; i++) {
          if (scores[i] === scores[i - 1]) {
              answer += 1;
          } else {
              break;
          }
      } 
  } else {
      for (let i = k - 1; i >= 0; i--) {
          if (!scores[i]) {
              answer -= 1;
          } else {
              break;
          }
      }
  }
  return answer;
}