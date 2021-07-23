// 1721. Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example 1:

// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [7,9,6,6,7,8,3,0,9,5], k = 5
// Output: [7,9,6,6,8,7,3,0,9,5]

var swapNodes = function(head, k) {
  // counter til k
  let counter = 1;
  // for finding the length of node
  let length = 0;
  let node1;
  let node2;
  let current = head;
  
  while (current) {
      if (counter === k) {
        // store the node 
        node1 = current;
      }
      current = current.next;
      counter += 1;
      length += 1;
  }
  current = head;
  counter = 1;
  while (current) {
      if (counter === length + 1 - k) {
        // store the k to last node
        node2 = current;
      }
      current = current.next;
      counter += 1;
  }
  // swap node values
  let temp = node1.val;
  node1.val = node2.val;
  node2.val = temp;
  return head;
};
