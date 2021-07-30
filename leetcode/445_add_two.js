// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Example 1:
// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]

// Example 2:
// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [8,0,7]

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
  // reverse the linked list first
  // two pointers for each linked list
  // build a new linked list by adding the two nodes values
  // keep track of a carryover
  
  // reverse the new linked list
  
  let pointer1 = reverseLinked(l1); // O(n)
  let pointer2 = reverseLinked(l2); // O(m)
  // O(m + n);
  let carry = 0;
  let newHead = new ListNode();
  let answerPointer = newHead;
  
  while (pointer1 || pointer2) { // O(n or m)
      let currentSum;
      if (pointer1 && pointer2) {
          currentSum = pointer1.val + pointer2.val + carry;
      } else if (pointer1) {
          currentSum = pointer1.val + carry;
      } else {
          currentSum = pointer2.val + carry;
      }
      carry = 0;
      if (currentSum > 9) {
          currentSum -= 10;
          carry = 1;
      }
      
      // another Node.next = new ListNode(7)
      let newNode = new ListNode(currentSum);
      answerPointer.next = newNode;
      if (pointer1) pointer1 = pointer1.next;
      if (pointer2) pointer2 = pointer2.next;
      answerPointer = answerPointer.next;
  }
  
  if (carry === 1) {
      answerPointer.next = new ListNode(1);
  }
  
  let answer = reverseLinked(newHead.next); // O(n or m)
  return answer;
};

var reverseLinked = function(head) {
  let prev = null;
  let current = head;
  while (current) {
      let tempNext = current.next;
      current.next = prev;
      prev = current;
      current = tempNext;
  }
  return prev; // head of reverse linkedlist
}
