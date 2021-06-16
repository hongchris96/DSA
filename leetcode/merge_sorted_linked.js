// 23. Merge k Sorted Lists

// You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.
// Merge all the linked-lists into one sorted linked-list and return it.

// Example 1:
// Input: lists = [[1,4,5],[1,3,4],[2,6]]
// Output: [1,1,2,3,4,4,5,6]
// Explanation: The linked-lists are:
// [
//   1->4->5,
//   1->3->4,
//   2->6
// ]
// merging them into one sorted list:
// 1->1->2->3->4->4->5->6

// Example 2:
// Input: lists = []
// Output: []

// Example 3:
// Input: lists = [[]]
// Output: []

// Constraints:
// k == lists.length
// 0 <= k <= 10^4
// 0 <= lists[i].length <= 500
// -10^4 <= lists[i][j] <= 10^4
// lists[i] is sorted in ascending order.
// The sum of lists[i].length won't exceed 10^4.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeKLists = function(lists) {
  if (lists.length === 0) return null;
  return mergeSort(lists);
};

var mergeSort = function(list) {
  while (list.length > 1) {
      let left = list.shift();
      let right = list.shift();
      let merged = merge(left, right);
      list.push(merged);
  }
  return list[0];
};

var merge = function(leftNList, rightNList) {
  if (!leftNList) {
      return rightNList;
  }
  if (!rightNList) {
      return leftNList;
  }
  
  let temp = new ListNode();
  let pointer = temp;
  
  while (leftNList && rightNList) {
      if (leftNList.val > rightNList.val) {
          pointer.next = rightNList;
          rightNList = rightNList.next;
      } else {
          pointer.next = leftNList;
          leftNList = leftNList.next;
      }
      pointer = pointer.next;
  }
  if (leftNList) pointer.next = leftNList;
  if (rightNList) pointer.next = rightNList;
  return temp.next;
}
