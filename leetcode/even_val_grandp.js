// 1315. Sum of Nodes with Even-Valued Grandparent

// Given a binary tree, return the sum of values of nodes with even-valued grandparent.  (A grandparent of a node is the parent of its parent, if it exists.)
// If there are no nodes with an even-valued grandparent, return 0.

// Example 1:
// Input: root = [6,7,8,2,7,1,3,9,null,1,4,null,null,null,5]
// Output: 18
// Explanation: The red nodes are the nodes with even-value grandparent while the blue nodes are the even-value grandparents.


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
 var sumEvenGrandparent = function(root) {
  // look at the current node if even
  // keep track of two layers of traversing down
  // add those to sum
  let answer = 0;
  let current = root;
  if (current.val % 2 === 0) {
      answer += sumGrandChildren(current);
  }
  if (current.left) {
      answer += sumEvenGrandparent(current.left);
  }
  if (current.right) {
      answer += sumEvenGrandparent(current.right);
  }
  return answer;
};

var sumGrandChildren = function(root) {
  let valSum = 0;
  
  if (root.left && root.left.left) {
      valSum += root.left.left.val;
  }
  if (root.left && root.left.right) {
      valSum += root.left.right.val;
  }
  if (root.right && root.right.left) {
      valSum += root.right.left.val;
  }
  if (root.right && root.right.right) {
      valSum += root.right.right.val;
  }
  
  return valSum;
}