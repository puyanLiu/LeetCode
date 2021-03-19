/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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

function depth(treeNode) {
    if (treeNode == null)
        return 0;
    if (treeNode.left == null && treeNode.right == null)
        return 1;
    let leftDepth = depth(treeNode.left)
    let rightDepth = depth(treeNode.right)
    if (treeNode.left == null || treeNode.right == null)
        return leftDepth + rightDepth + 1;
    return Math.min(leftDepth, rightDepth) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    return depth(root);
};
// @lc code=end

