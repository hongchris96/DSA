# 133. Clone Graph

# Given a reference of a node in a connected undirected graph.
# Return a deep copy (clone) of the graph.
# Each node in the graph contains a value (int) and a list (List[Node]) of its
# neighbors.

# class Node {
#     public int val;
#     public List<Node> neighbors;
# }

# Test case format:
# For simplicity, each node's value is the same as the node's index (1-indexed)
# Ffor example, the first node with val == 1, the second node with val == 2,
# and so on. The graph is represented in the test case using an adjacency list.
# An adjacency list is a collection of unordered lists used to represent a
# finite graph. Each list describes the set of neighbors of a node in the
# graph. The given node will always be the first node with val = 1. You must
# return the copy of the given node as a reference to the cloned graph.

# Example 1:
# Input: adjList = [[2,4],[1,3],[2,4],[1,3]]
# Output: [[2,4],[1,3],[2,4],[1,3]]
# Explanation: There are 4 nodes in the graph.
# 1st node (val = 1)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
# 2nd node (val = 2)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).
# 3rd node (val = 3)'s neighbors are 2nd node (val = 2) and 4th node (val = 4).
# 4th node (val = 4)'s neighbors are 1st node (val = 1) and 3rd node (val = 3).


class Node:
    def __init__(self, val=0, neighbors=None):
        self.val = val
        self.neighbors = neighbors if neighbors is not None else []


class Solution:
    def cloneGraph(self, node: 'Node') -> 'Node':
        # when no Node input
        if node is None:
            return None

        # initialize head node
        head = None

        # dictionary storing copies of Nodes
        # key: numberic self.val, value: copy of Node object
        # e.g. {1: <Node, self.val=1, neighbors=[x, y]>}
        visited = {}

        # queue of original nodes and copy nodes
        # for parallel breath first traversal
        originalQueue = [node]
        newQueue = [Node()]  # start with empty new Node

        while (originalQueue):
            currentOriginal = originalQueue.pop(0)
            currentCopy = newQueue.pop(0)
            currentCopy.val = currentOriginal.val
            # first node copy store it in head to be return in the end
            if currentCopy.val == 1:
                visited[currentCopy.val] = currentCopy
                head = currentCopy

            # for each neighbor of current original Node
            for neigh in currentOriginal.neighbors:
                # if copy exists in dictionary
                if neigh.val in visited:
                    # copy was made but no neighbors were filled
                    if visited[neigh.val].neighbors == []:
                        # store that Node from dictionary as newNeigh var
                        newNeigh = visited[neigh.val]
                    else:
                        # add that Node from dict to currentCopy's neighbors
                        currentCopy.neighbors.append(visited[neigh.val])
                        # no further action needed
                        continue

                # if copy does not exist in dictionary
                else:
                    # create a new copy of Node
                    newNeigh = Node(neigh.val)
                    # store this creation in dictionary
                    visited[neigh.val] = newNeigh

                # neighborless neigh copy added to currentCopy's neighbors
                currentCopy.neighbors.append(newNeigh)
                # append the new neigh copy and original neigh to
                # corresponding queues if there isn't one in queue already
                # e.g. when two "parent" Nodes have the same neighbor,
                #      only append that neighbor once
                if neigh.val not in (x.val for x in originalQueue):
                    newQueue.append(newNeigh)
                    originalQueue.append(neigh)

        # return first copy of Node
        return head
