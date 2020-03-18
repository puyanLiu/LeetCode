/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function depth(treeNode) {
    let leftDepth = treeNode.left ? depth(treeNode.left) : 0;
    let rightDepth = treeNode.right ? depth(treeNode.right) : 0;
    return Math.max(leftDepth, rightDepth) + 1;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root)
        return 0;
    return depth(root);
};
// @lc code=end

