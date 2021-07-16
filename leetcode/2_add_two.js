// 2. Add Two Numbers

// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

// Example 2:
// Input: l1 = [0], l2 = [0]
// Output: [0]

// Example 3:
// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]    

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
  let head = new ListNode();
  let pointer = head;
  let carryover = 0;
  let current1 = l1;
  let current2 = l2;
  while (current1 || current2) { // O(N) where N is longer linkedLIst
    let newNode = new ListNode();
    let currentSum;
    if (current1 && current2) { // when both list have the same length
      currentSum = current1.val + current2.val + carryover;
    } else if (current1) { // when one list is longer than the other
      currentSum = current1.val + carryover;
    } else {
      currentSum = current2.val + carryover;
    }
    // if current sum greater than 9, carry over
    if (currentSum > 9) {
      carryover = 1;
      currentSum = currentSum % 10;
    } else {
      carryover = 0;
    }
    // assign digit value to new node
    newNode.val = currentSum;
    // attach node to linked list
    pointer.next = newNode;
    // shifting pointers
    pointer = pointer.next;
    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;
  }
  // when there's still one extra carry over in the end, e.g. 99 + 99 = (1)98
  if (carryover) {
    pointer.next = new ListNode(carryover);
  }
  return head.next;
}