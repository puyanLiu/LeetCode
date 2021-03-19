/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */

function path(treeNode, arr, str) {
    if (treeNode == null) {
        return;
    }
    if (treeNode.val != null) {
        str = str + treeNode.val;
    }
    if (treeNode.left != null || treeNode.right != null) {
        str = str + '->';
    }
    if (treeNode.left == null && treeNode.right == null) {
        arr.push(str);
    }
    path(treeNode.left, arr, str);
    path(treeNode.right, arr, str);
}

var binaryTreePaths = function(root) {
    arr = []
    if (!root)
        return arr;
    path(root, arr, '');
    return arr;
};
// @lc code=end

