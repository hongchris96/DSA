# 21. Merge Two Sorted Lists

# Merge two sorted linked lists and return it as a sorted list. The list
# should be made by splicing together the nodes of the first two lists.

# Example 1:
# Input: l1 = [1,2,4], l2 = [1,3,4]
# Output: [1,1,2,3,4,4]

# Example 2:
# Input: l1 = [], l2 = []
# Output: []

# Example 3:
# Input: l1 = [], l2 = [0]
# Output: [0]

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeTwoLists(self, l1: ListNode, l2: ListNode) -> ListNode:
        head = ListNode()
        headPointer = head
        pointer1 = l1
        pointer2 = l2
        next1 = None
        next2 = None
        while pointer1 and pointer2:
            next1 = pointer1.next
            next2 = pointer2.next
            if pointer1.val <= pointer2.val:
                headPointer.next = pointer1
                pointer1 = next1
            else:
                headPointer.next = pointer2
                pointer2 = next2
            headPointer = headPointer.next
        if pointer1:
            headPointer.next = pointer1
        elif pointer2:
            headPointer.next = pointer2
        return head.next
