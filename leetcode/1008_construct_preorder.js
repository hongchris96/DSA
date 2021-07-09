// 1008. Construct Binary Search Tree from Preorder Traversal

// Given an array of integers preorder, which represents the preorder traversal of a BST (i.e., binary search tree), construct the tree and return its root.
// It is guaranteed that there is always possible to find a binary search tree with the given requirements for the given test cases.
// A binary search tree is a binary tree where for every node, any descendant of Node.left has a value strictly less than Node.val, and any descendant of Node.right has a value strictly greater than Node.val.
// A preorder traversal of a binary tree displays the value of the node first, then traverses Node.left, then traverses Node.right.

// Example 1:
// Input: preorder = [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

var bstFromPreorder = function(preorder) {
  let rootNode = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++) {
    // each element traverse existing tree and place in the appropriate position
    buildTree(preorder[i], rootNode);
  }
  return rootNode;
};

var buildTree = function(newNum, currentNode) {
  if (newNum < currentNode.val) { // new num smaller, go left
    // if left already exist, go to a deeper level, else assign new Node to here
    currentNode.left ? buildTree(newNum, currentNode.left) : currentNode.left = new TreeNode(newNum);
  } else { // new num greater, go right
    currentNode.right ? buildTree(newNum, currentNode.right) : currentNode.right = new TreeNode(newNum);
  }
}