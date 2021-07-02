// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree

// Given two binary trees original and cloned and given a reference to a node target in the original tree.
// The cloned tree is a copy of the original tree.
// Return a reference to the same node in the cloned tree.
// Note that you are not allowed to change any of the two trees or the target node and the answer must be a reference to a node in the cloned tree.
// Follow up: Solve the problem if repeated values on the tree are allowed.

// Example 1:
// Input: tree = [7,4,3,null,null,6,19], target = 3
// Output: 3
// Explanation: In all examples the original and cloned trees are shown. The target node is a green node from the original tree. The answer is the yellow node from the cloned tree.

var getTargetCopy = function(original, cloned, target) {
  // BFS traversal of both 
  let queue1 = [original];
  let queue2 = [cloned];
  while(queue1 && queue2) {
    let currentOriginal = queue1.shift();
    let currentClone = queue2.shift();
    if (currentOriginal === target) {
      return currentClone;
    } else {
      if (currentOriginal) {
        queue1.push(currentOriginal.left, currentOriginal.right);
        queue2.push(currentClone.left, currentClone.right);
      }   
    }
  }
};
