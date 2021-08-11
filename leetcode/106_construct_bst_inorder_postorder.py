# 106. Construct Binary Tree from Inorder and Postorder Traversal

# Given two integer arrays inorder and postorder where inorder is the inorder
# traversal of a binary tree and postorder is the postorder traversal of the
# same tree, construct and return the binary tree.

# Example 1:
# Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]
# Output: [3,9,20,null,null,15,7]

# Example 2:
# Input: inorder = [-1], postorder = [-1]
# Output: [-1]

# Definition for a binary tree node.


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def buildTree(self, inorder: List[int], postorder: List[int]) -> TreeNode:
        # dictionary to find index of numbers in inorder array
        numberIndex = {x: idx for idx, x in enumerate(inorder)}

        # recursion:
        # take the last number of postorder array == rootNode
        # head and tail represent indices in inorder array
        def buildSubTree(num, head, tail):
            newNode = TreeNode(num)
            inorderLoc = numberIndex[num]
            # right side of the rootNode value in inorder array
            # create node.right if right side range length > 0 in inorder array
            if inorderLoc + 1 <= tail:
                # build tree from last number in postorder array
                newNode.right = buildSubTree(postorder.pop(), inorderLoc + 1, tail)
            # left side of the rootNode value in inorder array
            if head <= inorderLoc - 1:
                newNode.left = buildSubTree(postorder.pop(), head, inorderLoc - 1)
            # return current new node
            return newNode

        # call the recursion starting at last number of initial postorder array
        # range from first and last index of inorder array
        return buildSubTree(postorder.pop(), 0, len(inorder) - 1)
