// Point Puzzle
// Delete v adds all v sum to total, and also deletes v+1, v-1
// Return maximum possible total points from array.

// [5, 6, 6, 4, 11]  -> 11 + 6 + 6 + 4 = 27

function maxPoints(elements) {
  // Write your code here
  let totalPoints = 0;
  // Largest to smallest
  elements.sort(function(a, b){return b - a});
  while (elements.length) {
      // Looking at largest and largest - 1
      let maxElement = elements[0];
      let maxMinusOne = maxElement - 1;
      // if v sum greater than or equal to v-1 sum
      // pick v sum value and remove both from array
      if (countingSum(maxElement, elements) >= countingSum(maxMinusOne, elements)) {
          totalPoints += countingSum(maxElement, elements);
          while (elements[0] === maxElement || elements[0] === maxMinusOne) {
              elements.shift();
          }
      // if v-1 sum greater than v sum
      } else if (countingSum(maxMinusOne, elements) > countingSum(maxElement, elements)) {
          // if v-1 sum greater than (v-2 sum + v sum)
          // pick v-1 sum and remove v, v-1, v-2 from array
          if (countingSum(maxMinusOne, elements) > countingSum(maxElement, elements) + countingSum(maxMinusOne - 1, elements)) {
              totalPoints += countingSum(maxMinusOne, elements);
              while (elements[0] === maxElement || elements[0] === maxMinusOne || elements[0] === maxMinusOne - 1) {
                  elements.shift();
              }
          // if v-1 sum smaller than (v-2 sum + v sum)
          // pick v sum and remove both from array
          } else {
              totalPoints += countingSum(maxElement, elements);
              while (elements[0] === maxElement || elements[0] === maxMinusOne) {
                  elements.shift();
              }
          }
      }
  }
  return totalPoints;
}

// helper function sum of the all elements of that value
function countingSum(element, array) {
  let countSum = 0;
  array.forEach(ele => {
      if (ele === element) countSum += ele;
  });
  return countSum;
}


// --------------------
// Condensed List
// Given a linked list, return duplicate elements of linked list.
// Node only has .data and .next

function condense(head) {
  // Write your code here
  let uniques = new Set();
  traverse(head, uniques);
  return head;
}

function traverse(head, uniques) {
  if (!head) {
      return;
  } else {
      uniques.add(head.data);
      if (head.next) {
          // when there's chaining multiple redundant nodes
          // remove node until next node is null or new unique
          while (head.next && uniques.has(head.next.data)) {
              head.next = head.next.next;
          }
          traverse(head.next, uniques)  
      } 
  }
}

