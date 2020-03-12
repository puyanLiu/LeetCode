/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function leftTree(root, arr) {
  arr.push(root.left && root.left.val);
  if (root.left) {
    leftTree(root.left, arr);
  }
  arr.push(root.right && root.right.val);
  if (root.right) {
    leftTree(root.right, arr);
  }
}

function rightTree(root, arr) {
  arr.push(root.right && root.right.val);
  if (root.right) {
    rightTree(root.right, arr);
  }
  arr.push(root.left && root.left.val);
  if (root.left) {
    rightTree(root.left, arr);
  }
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   if (!root || (!root.left && !root.right)) {
//     return true;
//   }
//   if ((root.left && !root.right) || (!root.left && root.right) || (root.left.val != root.right.val))
//     return false;
//   let leftArr = [root.left.val], rightArr = [root.right.val];
//   leftTree(root.left, leftArr);
//   rightTree(root.right, rightArr);
//   let leftLen = leftArr.length;
//   if (leftLen != rightArr.length)
//     return false;
//   var isFlag = true;
//   for (var i = 0; i < leftLen; i++) {
//     if (leftArr[i] != rightArr[i]) {
//       isFlag = false;
//       break;
//     }
//   }
//   return isFlag;
// };


function isMirror(q, p) {
  if ((q && !p) || (!q && p))
    return false;
  else if (!p && !q)
    return true;
  return p.val == q.val && isMirror(p.left, q.right) && isMirror(p.right, q.left);
}

var isSymmetric = function(root) {
  return isMirror(root, root);
};
// @lc code=end

