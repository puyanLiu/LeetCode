/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
 */

// @lc code=start
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
    arr = []
    let queue = [];
    queue.push({node: root, level: 0});
    let sum = 0;
    let num = 0;
    let currentLevel = 0;
    while(queue.length) {
        obj = queue.shift(); // 出队
        node = obj.node;
        level = obj.level;
        if (currentLevel == level) {
            sum += node.val;
            num += 1;
        } else {
            arr.push(sum / num);
            num = 1;
            sum = node.val;
            currentLevel = level;
        }

        if (node.left != null) {
            queue.push({
                node: node.left,
                level: level + 1
            });
        }

        if (node.right != null) {
            queue.push({
                node: node.right,
                level: level + 1
            });
        }
    }
    arr.push(sum / num);
    return arr;
};
// @lc code=end

