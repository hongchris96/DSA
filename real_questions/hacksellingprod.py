# Selling Products

# From a list of ids, make m amounts of deletions, and get remaining ids
# What's the miminum possible unique ids left after making m amounts of
# deletions?

def deleteProducts(ids, m):
    # Write your code here
    minUniq = len(ids) + 1

    for firstDel in range(len(ids)):
        for secondDel in range(firstDel + 1, len(ids)):
            remainingList = ids[firstDel+1:secondDel] + ids[secondDel+1:]
            remainingUniq = len(set(remainingList))
            print(remainingList)
            if remainingUniq < minUniq:
                minUniq = remainingUniq

    return minUniq


# making 2 deletions from the list of ids
print(deleteProducts([1, 1, 1, 2, 3, 2]), 2)
# 2: minimum 2 unique ids:
# 1,2 from [1,1,1,2] or 1,3 from [1,1,1,3]
