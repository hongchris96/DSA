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
    // declare two storage array of digits
    let num1arr = [];
    let num2arr = [];
    // go through both link list with a pointer and unshift the value into the array
    let current1 = l1;
    let current2 = l2;
    while (current1 || current2) { // O(N) where N is longer linkedLIst
        if (current1) {
            num1arr.unshift(current1.val);
            current1 = current1.next;
        }
        if (current2) {
            num2arr.unshift(current2.val);
            current2 = current2.next;
        }
    }
    // join my array into string, parseInt turn them into numbers
    num1arr = parseInt(num1arr.join(""));
    num2arr = parseInt(num2arr.join(""));
    // addition
    // console.log(num1arr, num2arr);
    let result = (num1arr + num2arr).toString();
    // convert the num to string
    // iterate through the string in a reverse order
    let head = new ListNode(parseInt(result[result.length-1]));
    let pointer = head;
    for (let i = result.length-2; i >= 0; i--) {
        let currentNode = new ListNode(parseInt(result[i]));
        pointer.next = currentNode;
        pointer = currentNode;
    }
    return head;
    // building a new link list
}