/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function traverseTree(treeNode, arr) {
//     if (treeNode == null)
//         return;
//     leftTree = treeNode.left;
//     if (leftTree && leftTree.left == null && leftTree.right == null) {
//         arr.push(leftTree.val);
//     }
//     traverseTree(treeNode.left, arr)
//     traverseTree(treeNode.right, arr)
// }

// /**
//  * @param {TreeNode} root
//  * @return {number}
//  */
// var sumOfLeftLeaves = function(root) {
//     arr = [];
//     traverseTree(root, arr);
//     sum = 0;
//     for (let i in arr) {
//         sum += arr[i];
//     }
//     return sum;
// };


function traverseTree(treeNode) {
    if (treeNode == null)
        return 0;
    leftTree = treeNode.left;
    leftVal = 0;
    if (leftTree && leftTree.left == null && leftTree.right == null) {
        leftVal = leftTree.val;
    }
    return leftVal + traverseTree(treeNode.left) + traverseTree(treeNode.right);
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    return traverseTree(root);
};

// @lc code=end

