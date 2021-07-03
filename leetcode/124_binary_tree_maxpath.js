// 124. Binary Tree Maximum Path Sum
// Hard

// A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.
// The path sum of a path is the sum of the node's values in the path.
// Given the root of a binary tree, return the maximum path sum of any path.

// Example 1:
// Input: root = [1,2,3]
// Output: 6
// Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// WRONG SOLUTION:

// var maxPathSum = function(root) {
//   let normalArray = orderTraversal(root);
//   console.log(normalArray);
//   let allNegative = true;
//   for (let i = 0; i < normalArray.length; i++) {
//       if (normalArray[i] >= 0) {
//           allNegative = false;
//           break;
//       }
//   }
//   if (allNegative) return Math.max(...normalArray);
  
//   let maxSum = 0;
//   let tempSum = 0;
//   for (let i = 0; i < normalArray.length; i++) {
//       let num = normalArray[i];
//       if (num >= 0) {
//           tempSum += num;
//           if (i === normalArray.length-1 && tempSum > maxSum){
//               maxSum = tempSum;
//           }
//       } else {
//           if (tempSum > maxSum) {
//               maxSum = tempSum;
//           }
//           tempSum = 0;
//       }
//   }
//   return maxSum;
// };

// var orderTraversal = function(root) {
//   if (!root) return [];
//   let left = orderTraversal(root.left);
//   let right = orderTraversal(root.right);
//   return left.concat([root.val], right);
// }
//---------------------------------------------------------------------------

var maxPathSum = function(root) {
  let answer = [-Infinity];
  dfs(root, answer);
  return answer[0];
};

var dfs = function(root, globalMax) {
  if (!root) return 0;
  let maxPathLeft = Math.max(0, dfs(root.left, globalMax));
  let maxPathRight = Math.max(0, dfs(root.right, globalMax));
  let currentMax = root.val + maxPathLeft + maxPathRight;
  globalMax.push(Math.max(globalMax[0], currentMax));
  globalMax.shift();
  return Math.max(maxPathLeft, maxPathRight) + root.val;
}