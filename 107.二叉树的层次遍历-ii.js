/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function tree2array(treeNode, arr, level) {
    if (arr.length == level) {
        arr.push([]);
    }
    arr[level].push(treeNode.val);
    if (treeNode.left)
        tree2array(treeNode.left, arr, level + 1);
    if (treeNode.right)
        tree2array(treeNode.right, arr, level + 1);
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if (!root)
        return [];
    const arr = [];
    tree2array(root, arr, 0);
    return arr.reverse();
};
// @lc code=end

