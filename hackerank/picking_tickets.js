// Given [8,5,4,8,4]
// subsequences are [4,4,5] and [8,8]
// return subsequences with the longest length is 3

function maxTickets(tickets) {
  let sortedTickets = qs(tickets);
  // console.log(sortedTickets);
  let highestCount = 0;
  let tempCount = 1;
  for (let i = 1; i < sortedTickets.length; i++) {
      let current = sortedTickets[i];
      let previous = sortedTickets[i-1];
      // console.log(current, previous);
      if (current === previous || current - 1 === previous) {
          tempCount += 1
          if (i === sortedTickets.length - 1) {
              if (tempCount > highestCount) {
                  highestCount = tempCount;
              }
          }
      } else {
          if (tempCount > highestCount) {
              highestCount = tempCount;
          }
          tempCount = 1;
      }
  }
  return highestCount;
}

function qs(arr) {
  if (arr <= 1) return arr;
  let piv = arr.shift();
  let left = arr.filter(ele => ele < piv);
  let right = arr.filter(ele => ele >= piv);
  return qs(left).concat([piv], qs(right));
}