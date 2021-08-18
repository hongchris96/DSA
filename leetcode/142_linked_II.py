# 142. Linked List Cycle II

# Given a linked list, return the node where the cycle begins. If there is no
# cycle, return null.
# There is a cycle in a linked list if there is some node in the list that can
# be reached again by continuously following the next pointer. Internally, pos
# is used to denote the index of the node that tail's next pointer is connected
# to. Note that pos is not passed as a parameter.
# Notice that you should not modify the linked list.

# Example 1:
# Input: head = [3,2,0,-4], pos = 1
# Output: tail connects to node index 1
# Explanation: There is a cycle in the linked list, where tail connects to the
# second node.

# Example 2:
# Input: head = [1,2], pos = 0
# Output: tail connects to node index 0
# Explanation: There is a cycle in the linked list, where tail connects to the
# first node.

# Example 3:
# Input: head = [1], pos = -1
# Output: no cycle
# Explanation: There is no cycle in the linked list.

# Follow up: Can you solve it using O(1) (i.e. constant) memory?

# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: ListNode) -> ListNode:
        # record = set()
        # pointer = head
        # while pointer:
        #     if pointer in record:
        #         return pointer
        #     record.add(pointer)
        #     pointer = pointer.next
        # return None

        # Constant space
        slower = faster = head
        while faster and faster.next:
            # one pointer goes faster than the other
            slower = slower.next
            faster = faster.next.next
            # eventually they go out of range if not cycle
            # or they match up if cycle
            if slower == faster:
                # have another pointer starting at the beginning
                pointer = head
                while pointer != slower:
                    # move both pointers at the same speed
                    # and they magically points to the same node
                    # that's the cycle beginning
                    pointer = pointer.next
                    slower = slower.next
                return pointer
        return None
