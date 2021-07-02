// 109. Convert Sorted List to Binary Search Tree

// Given the head of a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.
// For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.

// Example 1:
// Input: head = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */


var sortedListToBST = function(head) {
  // -10, -3, -2, 0, 5, 6, 9
  //              0
  //      -3              6
  //  -10     -2       5      9
  // find the length -> half -> middle -> root
  // binary search method somehow
  
  let normalArray = [];
  let marker = head;
  while(marker) {
      normalArray.push(marker.val);
      marker = marker.next;
  }
  return buildTree(normalArray);
};

var buildTree = function(arr) {
  if (arr.length === 0) return null;
  let midIdx = Math.floor(arr.length / 2);
  let rootNode = new TreeNode(arr[midIdx]);
  rootNode.left = buildTree(arr.slice(0, midIdx));
  rootNode.right = buildTree(arr.slice(midIdx + 1));
  return rootNode;
}