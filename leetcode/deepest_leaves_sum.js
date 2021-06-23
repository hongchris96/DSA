/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function(root) {
    let levels = {};
    let queue = [root];
    let i = 1;
    while (queue.length) {
        levels[i] = [...queue];
        let nextLayer = [];
        while(queue.length) {
            let ele = queue.shift();
            if (ele && (ele.left || ele.right)) {
                nextLayer.push(ele.left, ele.right);
            }
        }
        queue.push(...nextLayer)
        i += 1
    }
    let bottomKey = Math.max(...Object.keys(levels));
    return levels[bottomKey].reduce((acc, ele) => {
        if (ele) return acc + ele.val;
        else return acc;
    }, 0);
};
