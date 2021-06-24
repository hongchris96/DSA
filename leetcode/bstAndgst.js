// 1038. Binary Search Tree to Greater Sum Tree

// Given the root of a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.
// As a reminder, a binary search tree is a tree that satisfies these constraints:

// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Note: This question is the same as 538: https://leetcode.com/problems/convert-bst-to-greater-tree/

// Example 1:
// Input: root = [4,1,6,0,2,5,7,null,null,null,3,null,null,null,8]
// Output: [30,36,21,36,35,26,15,null,null,null,33,null,null,null,8]

// Example 2:
// Input: root = [0,null,1]
// Output: [1,null,1]

// Example 3:
// Input: root = [1,0,2]
// Output: [3,3,2]

// Example 4:
// Input: root = [3,2,4,1]
// Output: [7,9,4,10]

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
 * @return {TreeNode}
 */

 var bstToGst = function(root) {
  let stack = dfsInOrder(root); // Array of nodes from in order dfs
  let currentNode = stack.pop(); // Big original val node
  let currentSum = currentNode.val; // Sum accumulator

  // Going from largest to smallest original val nodes
  while (stack.length) {
    currentNode = stack.pop();
    // Update Accumulated sum
    currentSum += currentNode.val;
    // Update current node val
    currentNode.val = currentSum;
  }
  return root;
};

var dfsInOrder = function(root) {
  if (!root) return [];

  let leftSide = dfsInOrder(root.left);
  let current = [root];
  let rightSide = dfsInOrder(root.right);
  
  return leftSide.concat(current).concat(rightSide);
}