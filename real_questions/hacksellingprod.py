# Selling Products

# From a list of ids, make m amounts of deletions, and get remaining ids
# What's the miminum possible unique ids left after making m amounts of
# deletions?

from collections import defaultdict


def deleteProducts(ids, m):
    # unique id count
    idsCount = defaultdict(int)
    for id in ids:
        idsCount[id] += 1
    # create sorted list of tuples with id and count
    leastToMost = list(sorted(idsCount.items(), key=lambda item: item[1]))
    # while there is still deletions allowed
    while m > 0:
        # if deletion is more than or equal to the least count id
        if m >= leastToMost[0][1]:
            # decrease the available deletion left
            # remove that id count pair from list
            m -= leastToMost[0][1]
            leastToMost.pop(0)
        else:
            # leave the loop if deletion amount is less than id count
            # because there will still be remaining unique id left
            break
    return len(leastToMost)


# making 2 deletions from the list of ids
print(deleteProducts([1, 1, 1, 2, 3, 2], 2))
# 2: minimum 2 unique ids:
# 1,2 from [1,1,1,2] or 1,3 from [1,1,1,3]
print(deleteProducts([1, 2, 3, 4, 5, 6, 7], 4))  # 3
